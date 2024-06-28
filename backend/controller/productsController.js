const productModel = require("../models/productModel");

async function productsController(req, res) {
  try {
    const dataResponse = await productModel.find({});
    // console.log("data response", dataResponse);
    res.status(200).json({
      message: "Products fetched successfully.",
      data: dataResponse,
      error: false,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      data: [],
      error: true,
      success: false,
    });
  }
}

module.exports = productsController;
