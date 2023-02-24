import express from "express";
import { newOrder } from "../controller/order"
const router = express.Router();

router.post('/order/new', newOrder);

module.exports = router;