import { Router } from 'express'
import controllers from '../controller'

const router = Router()

router.post('/register', controllers.userController.register)
router.post('/login', controllers.userController.login)

export default router
