import express from 'express'
import { upload } from '../../services/file-storage.js'
import { login, register } from '../controllers/auth.controller.js'

const authRouter = express.Router()

authRouter.post('/register', upload.single('picture'), register)
authRouter.post('/login', login)

export default authRouter