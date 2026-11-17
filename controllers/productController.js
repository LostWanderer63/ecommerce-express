const productService = require("../services/productService");

const getAllProducts = (req, res) => {
  res.send(productService.getAllProducts());
};

const addProduct = (req, res) => {
  res.send(productService.addProduct());
};

const getProductById = (req, res) => {
  res.send(productService.getProductById(req.params.id));
};

module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
};
