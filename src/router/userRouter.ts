import { Router } from 'express'
import controllers from '../controller'
import middleware from '../middleware'

const router = Router()

router.post('/register', middleware.globalLimiter, controllers.userController.register)
router.post('/login', middleware.globalLimiter, controllers.userController.login)
router.post('/refreshToken', middleware.globalLimiter, controllers.userController.refreshToken)

export default router
