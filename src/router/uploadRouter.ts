import { Router } from 'express'
import controllers from '../controller'

import { verifyJWT } from '../middleware/auth'
import { upload as uploadFunc } from '../middleware/multer'

const router = Router()

router.post('/upload', verifyJWT, uploadFunc.single('file'), controllers.uploadController.upload)

export default router
