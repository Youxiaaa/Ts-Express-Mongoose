import { Router } from 'express'
import controllers from '../controller'

import { verifyJWT } from '../middleware/auth'
// import { upload as uploadFunc } from '../middleware/multer'
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
    cb(null, `${dayjs().format('YYYYMMDDhhmmss')}${file.originalname}`)
    // cb(null, file.originalname)
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

// const upload = uploadFunc({ storage: storage });

const router = Router()

router.post('/upload', verifyJWT, upload.single('file'), controllers.uploadController.upload)

export default router
