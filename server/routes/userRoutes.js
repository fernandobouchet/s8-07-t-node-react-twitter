import { Router } from 'express';
import {
    registerUser,
    userProfile,
    confirmUser,
    authenticateUser,
    followUser,
    unfollowUser,
    getFollowing
} from '../controllers/userController.js'

const router = Router();

router.post('/register', registerUser);
router.get("/profile/:id", userProfile);
router.get('/confirm/:token', confirmUser);
router.post('/authenticate', authenticateUser);
router.post('/:userId/follow', followUser);
router.delete('/:userId/unfollow/:userToUnfollowId', unfollowUser);
router.get('/:userId/following', getFollowing);