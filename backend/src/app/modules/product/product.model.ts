import { Schema, model } from 'mongoose';

// Define the interface for a Product document
type IProduct = {
  name: string;
  description: string;
  category: string;
  status: string;
  rating: number;
  currentPrice: string;
  price: string;
  imageUrl: string;
};

// Define the schema
const ProductSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
    enum: ['Bedroom', 'Kitchen', 'Bathroom', 'Living Room'],
  },
  status: {
    type: String,
    enum: ['New', 'Sale', 'Out of Stock'],
    default: 'New',
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  currentPrice: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
  imageUrl: {
    type: String,
    // required: true,
  },
});

// Create the model
const Product = model<IProduct>('Product', ProductSchema);

export default Product;
