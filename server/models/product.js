import mongoose from "mongoose";

var productSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  imgUrl: String,
  type: String,
});

var Product = mongoose.model("Product", productSchema);

export default Product;
