import { Router } from 'express'
import todoController from '../controller/todoController'
import { filterLanguege } from '../middleware/languege'

const router = Router()

router.get('/get', todoController.get)
router.post('/add', filterLanguege, todoController.add)
router.put('/update/:id', filterLanguege, todoController.update)
router.delete('/delete/:id', todoController.delete)

export default router
