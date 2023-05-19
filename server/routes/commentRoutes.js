import { Router } from 'express';
import {
  createComment,
  deleteComment,
  getCommentById,
  getCommentByUserId,
  updateComment,
} from '../controllers/commentController.js';

const commentRouter = Router();

commentRouter.get('/comment/:id', getCommentById);
commentRouter.post('/comment', createComment);
commentRouter.put('/comment/:id', updateComment);
commentRouter.delete('/comment/:id', deleteComment);
commentRouter.get('/comment/user/:userId', getCommentByUserId);

export default commentRouter;
