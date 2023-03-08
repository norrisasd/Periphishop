import mongoose from "mongoose";

var orderSchema = new mongoose.Schema({
  shippingInformation: {
    firsname: String,
    lastname: String,
    email: String,
    address: String,
    zip: Number,
    cardNumber: Number,
    exDate: String,
    cvv: Number,
  },
  totalPrice: Number,
  totalQuantity: Number,
  orderItems: [
    {
      name: String,
      quantity: Number,
      price: Number,
      type: String,
    },
  ],
});

var Order = mongoose.model("Order", orderSchema);

export default Order;
