import express from "express";
import { getOrder, newOrder } from "../controller/order";
const router = express.Router();

router.post("/order/new", newOrder);
router.get("/order", getOrder);

module.exports = router;
