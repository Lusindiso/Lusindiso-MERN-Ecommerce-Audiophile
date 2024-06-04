import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    products: [
      {
        productId: String,
        quntity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamp: true },
);

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
