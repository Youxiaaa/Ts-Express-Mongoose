import { Request } from 'express'
import dayjs from 'dayjs'
const fs = require("fs")
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function(req: Request, file: any, cb: Function) {
    const uploadsDirectory = './uploads/'
    if (!fs.existsSync(uploadsDirectory)) {
      fs.mkdirSync(uploadsDirectory);
    }
    cb(null, uploadsDirectory)
  },
  filename: function(req: Request, file: any, cb: Function) {
    cb(null, `${dayjs().format('YYYYMMDDhhmmss')}-${file.originalname}`)
  }
})

const whiteList = [
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif'
]

const fileFilter = (req: Request | any, file: any, cb: Function) => {
  //! 只允許白名單內的檔案格式
  if (whiteList.includes(file.mimetype)) {
    cb(null, true)
  } else {
    req.uploadError = '檔案格式不正確'
    cb(null, false, req.uploadError)
  }
}

export const upload = multer({
  storage,
  limits: {
    //! 只允許檔案為5MB以內
    fileSize: 1024 * 1024 * 5
  },
  fileFilter
})
