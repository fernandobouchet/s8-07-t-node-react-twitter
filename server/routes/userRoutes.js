import { Router } from 'express';
import {
    registerUser,
    userProfile,
    confirmUser,
    authenticateUser,
    followUser,
    unfollowUser,
    getFollowing, 
} from '../controllers/userController.js'

const router = Router();

router.post('/register', registerUser);
router.get("/profile/:id", userProfile);
router.get('/confirm/:token', confirmUser);
router.post('/authenticate', authenticateUser);
router.post('/follow', followUser);
router.delete('/unfollow', unfollowUser);
router.get('/:userId/following', getFollowing);

export default router;