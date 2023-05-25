import { Router } from 'express';
import {
  createTweet,
  getTweetsByUserId,
  updateTweet,
  likeTweet,
  unlikeTweet,
} from '../controllers/tweetController.js';
import upload from '../middlewares/multer.js';

const tweetRouter = Router();

tweetRouter.post('/create', upload.array('images'), createTweet);
tweetRouter.get('/user/:userId', getTweetsByUserId);
tweetRouter.put('/:id',  updateTweet);
tweetRouter.post('/like/:id',  likeTweet);
tweetRouter.delete('/unlike/:id', unlikeTweet);

export default tweetRouter;
