import express from 'express'
import authRouter from './auth.route.js'
import userRouter from './users.route.js'

const api = express.Router()

api.use('/auth', authRouter)
api.use('/users', userRouter)

export default api