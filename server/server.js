
import express  from "express";
import mongoose from "mongoose";
// import order from "./routes/order"
const order = require("./routes/order");

require('dotenv').config();
const PORT = process.env.PORT || 3001;

const app = express();

mongoose.set('strictQuery', false);
mongoose.
    connect(process.env.DATABASE)
    .then(() => console.log("DB CONNECTED"))
    .catch((error) => console.log("ERROR :", error))



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
app.use(express.json());
app.use('/',order)