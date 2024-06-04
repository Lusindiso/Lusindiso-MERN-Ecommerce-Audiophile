import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Enter the product title'],
    },
    category: {
      type: String,
      required: [true, 'Select product category'],
    },
    description: {
      type: String,
      required: [true, 'Enter product description'],
    },
    price: {
      type: Number,
      required: [true, 'Please enter price'],
    },
    features: {
      type: String,
      required: [true, 'Enter product features'],
    },
    includes: {
      type: String,
      required: [true, 'Whats in the box?'],
    },
    coverImage: {
      type: String,
    },
    images: String,
  },
  { timestamps: true },
);

const Product = mongoose.model('Poduct', productSchema);
export default Product;
