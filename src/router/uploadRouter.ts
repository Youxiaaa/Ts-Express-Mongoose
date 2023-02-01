import { Router } from 'express'
import controllers from '../controller'

import { verifyJWT } from '../middleware/auth'
import upload from '../middleware/multer'

const router = Router()

router.post('/upload', verifyJWT, upload.single('file'), controllers.uploadController.upload)

export default router
