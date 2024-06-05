import express from 'express';
import {
  verifyAdmin,
  verifyToken,
  verifyUser,
} from '../middleware/verifyUser.js';
import {
  createCart,
  deleteCart,
  getAllCarts,
  getUserCart,
  updateCart,
} from '../controllers/cartController.js';
const router = express.Router();

router.post('/', verifyToken, createCart);
router.put(':/id', verifyUser, updateCart);

router.delete('/:id', verifyUser, deleteCart);
router.get('/:userId', verifyUser, getUserCart);
router.get('/', verifyAdmin, getAllCarts);
export default router;
