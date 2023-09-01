import { Router } from 'express'
import { ctrlCreateUser, ctrlGetAllUsers } from '../controllers/users.controller.js'

const userRouter = Router()

userRouter.get('/', ctrlGetAllUsers)

userRouter.post('/', ctrlCreateUser)

export { userRouter }
