import express from 'express';
import { verifyAdmin } from '../middleware/verifyUser.js';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from '../controllers/productController.js';
const router = express.Router();

router.post('/', verifyAdmin, createProduct);
router.put(':/id', verifyAdmin, updateProduct);

router.delete('/:id', verifyAdmin, deleteProduct);
router.get('/:id', getProduct);
router.get('/', getAllProducts);
export default router;
