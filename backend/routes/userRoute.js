import express from 'express';
import {
  check,
  validationResult,
} from 'express-validator/check';
const router = express.Router();

router.post(
  '/',
  [
    check('name', 'Named is required').not().isEmpty(),
    check(
      'email',
      'Please include a valid email',
    ).isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more char',
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    res.send('User route');
  },
);

export default router;
