import { Router } from 'express';

import {
  getAllPostsHandler,
  getPostByIdHandler,
  createPostsHandler,
  updatePostByIdHandler,
  deletePostByIdHandler,
} from './post.controller';

const router = Router();

router.get('/', getAllPostsHandler);
router.get('/:id', getPostByIdHandler);
router.post('/', createPostsHandler);
router.patch('/:id', updatePostByIdHandler);
router.delete('/:id', deletePostByIdHandler);

export default router;
