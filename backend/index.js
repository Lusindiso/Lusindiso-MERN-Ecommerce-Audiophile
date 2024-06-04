import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js';
import productRoute from './routes/productRoute.js';
import cartRoute from './routes/cartRoute.js';
import orderRoute from './routes/orderRoute.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/v1/user', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/product', productRoute);
app.use('/api/v1/cart', cartRoute);
app.use('/api/v1/order', orderRoute);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('DB connection successful');
  } catch (error) {
    console.log(error);
  }
};
connectDB();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
