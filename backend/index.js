const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const productsController = require("./controller/productsController");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/products", productsController);

const PORT = 8000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on PORT", PORT);
  });
});
