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

const createProduct = (req, res) => {
  const productName = req.body && req.body.productName;

  if (!productName || !productName.trim()) {
    return res.status(400).json({ error: "productName is required" });
  }

  const product = productService.createProduct(productName.trim());
  console.log("Product added:", product);
  res.status(201).json(product);
};

module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
  createProduct,
};
