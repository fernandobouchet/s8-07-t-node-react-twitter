import { Router } from 'express';
import {
  createComment,
  deleteComment,
  getCommentById,
  getCommentByUserId,
  updateComment,
} from '../controllers/commentController.js';
import { sessionMiddleware } from '../middleware/sessionMiddleware.js';

const commentRouter = Router();

commentRouter.get('/comment/:id', getCommentById);
commentRouter.post('/comment', sessionMiddleware, createComment);
commentRouter.put('/comment/:id',sessionMiddleware, updateComment);
commentRouter.delete('/comment/:id', sessionMiddleware, deleteComment);
commentRouter.get('/comment/user/:userId', getCommentByUserId);

export default commentRouter;
