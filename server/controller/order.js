import Order from "../models/order";
import express from "express";

const router = express.Router();

export const newOrder = async (req, res) => {
  try {
    const { shippingInformation, totalPrice, totalQuantity, orderItems } =
      req.body;
    const order = new Order({
      shippingInformation,
      totalPrice,
      totalQuantity,
      orderItems,
    });
    order.save();
    res.status(201).json({
      order,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

export const getOrder = async (req, res) => {
  try {
    const results = await Order.find();
    res.send(results).status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
