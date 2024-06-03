import express from 'express';
import { body } from 'express-validator';
import verifyUser from '../middleware/verifyUser.js';

import {
  getUser,
  loginUser,
} from '../controllers/authController.js';
const router = express.Router();

router.get('/', verifyUser, getUser);

router.post(
  '/login',

  body('email', 'Please include a valid email').isEmail(),
  body('password', 'Password is required').exists(),
  loginUser,
);

export default router;
