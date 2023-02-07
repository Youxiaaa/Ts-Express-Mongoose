import { Request } from 'express'
import dayjs from 'dayjs'
const fs = require("fs")
const multer = require('multer')

//! 設定檔案存放位置
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
//! 過濾檔案種類
const fileFilter = (req: Request | any, file: any, cb: Function) => {
  //! 只允許白名單內的檔案格式
  if (whiteList.includes(file.mimetype)) {
    cb(null, true)
  } else {
    req.uploadError = '檔案格式不正確'
    cb(null, false, req.uploadError)
  }
}
//! 設定檔案限制
const limits = {
  fileSize: 1024 * 1024 * 5
}

export const upload = multer({
  storage,
  limits,
  fileFilter
})
