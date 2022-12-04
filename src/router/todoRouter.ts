import { Router } from 'express'
import todoController from '../controller/todoController'

const router = Router()

router.get('/get', todoController.get)
router.post('/add', todoController.add)
router.put('/update/:id', todoController.update)
router.delete('/delete/:id', todoController.delete)

export default router
