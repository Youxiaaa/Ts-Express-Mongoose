import { Router } from 'express'
import controllers from '../controller'
import middleware from '../middleware'

const router = Router()

router.get('/get', middleware.verifyJWT, controllers.todoController.get)
router.post('/add', middleware.verifyJWT, middleware.filterLanguege, controllers.todoController.add)
router.put('/update/:id', middleware.verifyJWT, controllers.todoController.update)
router.delete('/delete/:id', middleware.verifyJWT, controllers.todoController.delete)

export default router
