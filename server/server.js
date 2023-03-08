import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import order from "./routes/order"
const order = require("./routes/order");
const product = require("./routes/product");
const morgan = require("morgan");

require("dotenv").config();
const PORT = process.env.PORT || 3001;

const app = express();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB CONNECTED"))
  .catch((error) => console.log("ERROR :", error));

app.use(express.json());
app.use(cors());
app.use("/api", order);
app.use("/api", product);
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
