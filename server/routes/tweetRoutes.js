import { Router } from 'express';
import {
  createTweet,
  getTweetsByUserId,
  updateTweet,
  likeTweet,
  unlikeTweet,
} from '../controllers/tweetController.js';
import { sessionMiddleware } from '../middleware/sessionMiddleware.js';

const tweetRouter = Router();

tweetRouter.post('/create', sessionMiddleware, createTweet);
tweetRouter.get('/user/:userId', getTweetsByUserId);
tweetRouter.put('/:id', sessionMiddleware, updateTweet);
tweetRouter.post('/like/:id', sessionMiddleware, likeTweet);
tweetRouter.delete('/unlike/:id', sessionMiddleware, unlikeTweet);

export default tweetRouter;
