import express from 'express'
import{ getPosts, createPost, updatePost, deletePost, likePost  } from '../controllers/posts.js'


const router = express.Router();

// localhost:5000/posts/: the routes declared on this page  


router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost)


export default router; 