import dayjs from 'dayjs'
const fs = require("fs");
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function(req: any, file: any, cb: any) {
    const uploadsDirectory = './uploads/'
    if (!fs.existsSync(uploadsDirectory)) {
      fs.mkdirSync(uploadsDirectory);
    }
    cb(null, uploadsDirectory)
  },
  filename: function(req: any, file: any, cb: any) {
    cb(null, `${dayjs().format('YYYYMMDDhhmmss')}-${file.originalname}`)
  }
})

const fileFilter = (req: any, file: any, cb: any) => {
  // only accept jpeg and png files
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    req.fileValidationError = '檔案格式不正確'
    cb(null, false, req.fileValidationError)
  }
}

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter
})

export default upload
