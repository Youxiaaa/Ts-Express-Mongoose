import { Router } from 'express'
import controllers from '../controller'
import { filterLanguege } from '../middleware/languege'
import { verifyJWT } from '../middleware/auth'

const router = Router()

router.get('/get', verifyJWT, controllers.todoController.get)
router.post('/add', verifyJWT, filterLanguege, controllers.todoController.add)
router.put('/update/:id', verifyJWT, controllers.todoController.update)
router.delete('/delete/:id', verifyJWT, controllers.todoController.delete)

export default router
