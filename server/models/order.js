import mongoose from "mongoose";

var orderSchema = new mongoose.Schema({
    totalPrice: Number,
    totalQuantity: Number,
    cartItems:[{
        name: String,
        quantity: Number,
        price:Number
    }]
});

var Order = mongoose.model("Order", orderSchema);

export default Order