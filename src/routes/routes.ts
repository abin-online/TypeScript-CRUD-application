import express from 'express'
import userController from '../controllers/userController'
import { create } from 'ts-node'
const router = express.Router()

router.get('/user', userController.getAllUser)
router.get('/user/:id', userController.getUsers)
router.post('/user' , userController.createUser)
router.put('/user/:id' , userController.updateUser)
router.delete('/user/:id',userController.deleteUsers)


export default router