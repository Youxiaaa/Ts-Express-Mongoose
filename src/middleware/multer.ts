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
    // cb(null, new Date().toISOString() + file.originalname)
    cb(null, file.originalname)
  }
})

const fileFilter = (req: any, file: any, cb: any) => {
  // only accept jpeg and png files
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

export const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
})
