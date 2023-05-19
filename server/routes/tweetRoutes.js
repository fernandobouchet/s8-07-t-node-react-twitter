import { Router } from 'express';
import {
  createTweet,
  getTweetsByUserId,
  updateTweet,
  likeTweet,
  unlikeTweet,
} from '../controllers/tweetController.js';

const tweetRouter = Router();

tweetRouter.post('/create', createTweet);
tweetRouter.get('/user/:userId', getTweetsByUserId);
tweetRouter.put('/:id',  updateTweet);
tweetRouter.post('/like/:id',  likeTweet);
tweetRouter.delete('/unlike/:id', unlikeTweet);

export default tweetRouter;
