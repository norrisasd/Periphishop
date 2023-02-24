import Order from "../models/order"
import express from "express";

const router = express.Router()

export const newOrder = async (req, res) => {
    try {
        const { totalPrice, totalQuantity, cartItems } = req.body
    const order = new Order({
        totalPrice,
        totalQuantity,
        cartItems
    })
    order.save();
    res.status(201).json({
        success: true,
        order
    });
    } catch (err) {
        console.log(err)
        res.sendStatus(400)
    }
    
};