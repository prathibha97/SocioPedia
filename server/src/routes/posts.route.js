import express from 'express'
import { upload } from '../../services/file-storage.js'
import { createPost, getFeedPosts, getUserPosts, likePost } from '../controllers/posts.controller.js'
import { verifyToken } from '../middleware/auth.js'

const postRouter = express.Router()

postRouter.post('/post', verifyToken, upload.single('picture'), createPost)
postRouter.get('/', verifyToken, getFeedPosts)
postRouter.get('/:userId/posts', verifyToken, getUserPosts)
postRouter.patch('/:id/like', verifyToken, likePost)

export default postRouter