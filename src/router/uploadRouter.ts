import { Router } from 'express'
import controllers from '../controller'
import middleware from '../middleware'

const router = Router()

router.post('/upload', middleware.verifyJWT, middleware.upload.single('file'), controllers.uploadController.upload)

export default router
