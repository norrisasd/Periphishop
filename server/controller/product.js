import Product from "../models/product";
import express from "express";

const router = express.Router();

export const newProduct = async (req, res) => {
  try {
    const { name, quantity, price, imgUrl, type } = req.body;
    const product = new Product({
      name,
      quantity,
      price,
      imgUrl,
      type,
    });
    product.save();
    res.status(201).json({
      succes: true,
      product,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

export const getProduct = async (req, res) => {
  try {
    let results = await Product.find();
    res.send(results).status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.body._id);
    res.json({ ok: true });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.body._id, {
      name: req.body.name,
    });
    res.json(product);
  } catch (error) {
    console.log(error);
  }
};
