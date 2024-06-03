import express from 'express';
import { body } from 'express-validator';
import { registerUser } from '../controllers/userController.js';
const router = express.Router();

router.post(
  '/',
  [
    body('name', 'Named is required').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body(
      'password',
      'Please enter a password with 6 or more char',
    ).isLength({ min: 6 }),
  ],
  registerUser,
);

export default router;
