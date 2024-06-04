const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
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
    amount: {
      type: String,
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      default: 'pending',
    },
  },
  { timestamp: true },
);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
