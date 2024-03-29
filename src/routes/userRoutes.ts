import express from 'express';
import { getUser, postUser } from '../controllers/UserController'

const router = express.Router();

router.get('/', getUser);
router.post('/', postUser);

export default router;