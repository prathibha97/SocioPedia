import express from 'express'
import authRouter from './auth.route.js'

const api = express.Router()

api.use('/auth', authRouter)

export default api