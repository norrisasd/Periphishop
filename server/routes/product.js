import express from "express";
import {
  deleteProduct,
  getProduct,
  newProduct,
  updateProduct,
} from "../controller/product";
const router = express.Router();

router.post("/product/new", newProduct);
router.get("/product/", getProduct);
router.delete("/product/delete", deleteProduct);
router.patch("/product/update", updateProduct);

module.exports = router;
