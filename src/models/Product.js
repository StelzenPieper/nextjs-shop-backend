import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  category: String,
  tags: String,
});
const Product =
  mongoose.models?.Product ?? mongoose.model("Product", productSchema);

export default Product;
