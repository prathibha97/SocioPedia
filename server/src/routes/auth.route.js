import express from 'express'
import { upload } from '../../services/file-storage.js'
import { register } from '../controllers/auth.controller.js'

const authRouter = express.Router()

authRouter.post('/register', upload.single('picture'), register)

export default authRouter