import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoute from './routes/userRoute.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/v1/user', userRoute);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, () => {
      console.log('Database connected successfull!');
    });
  } catch (error) {
    console.log(error);
  }
};

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
