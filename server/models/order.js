import mongoose from "mongoose";

var orderSchema = new mongoose.Schema(
  {
    shippingInformation: {
      firstname: String,
      lastname: String,
      email: String,
      address: String,
      zip: Number,
      cardNumber: String,
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
  },
  { typeKey: "$type" }
);

var Order = mongoose.model("Order", orderSchema);

export default Order;
