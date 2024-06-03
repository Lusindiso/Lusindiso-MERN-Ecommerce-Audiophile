import express from 'express';
import { check } from 'express-validator/check';
import { registerUer } from '../controllers/userController.js';
const router = express.Router();

router.post('/', [
  check('name', 'Named is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more char',
  ).isLength({ min: 6 }),
  registerUer,
]);

export default router;
