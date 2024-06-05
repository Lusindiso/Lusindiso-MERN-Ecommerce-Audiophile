import express from 'express';
import stripe from 'stripe';
import { createPayment } from '../controllers/stripeController';
stripe(process.env.STRIPE_KEY);
const router = express.Router();

router.post('/payment', createPayment);

export default router;
