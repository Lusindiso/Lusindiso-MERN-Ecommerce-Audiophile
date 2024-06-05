import express from 'express';
import {
  verifyAdmin,
  verifyToken,
  verifyUser,
} from '../middleware/verifyUser.js';
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getUserOrders,
  updateOrder,
} from '../controllers/orderController.js';
const router = express.Router();

router.post('/', verifyToken, createOrder);
router.put(':/id', verifyAdmin, updateOrder);

router.delete('/:id', verifyAdmin, deleteOrder);
router.get('/:userId', verifyUser, getUserOrders);
router.get('/', verifyAdmin, getAllOrders);
export default router;
