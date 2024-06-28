const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    image: String,
    price: Number,
    brand: String,
    inStock: Boolean,
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
