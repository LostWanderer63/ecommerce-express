const productService = require("../services/productService");
const asyncHandler = require("../utils/asyncHandler");
const {
  requirePositiveInt,
  requireNonEmptyString,
} = require("../utils/validators");

const getAllProducts = asyncHandler((req, res) => {
  res.send(productService.getAllProducts());
});

const addProduct = asyncHandler((req, res) => {
  res.send(productService.addProduct());
});

const getProductById = asyncHandler((req, res) => {
  const id = requirePositiveInt(req.params.id, "id");
  res.send(productService.getProductById(id));
});

const createProduct = asyncHandler((req, res) => {
  const productName = requireNonEmptyString(
    req.body && req.body.productName,
    "productName"
  );

  const product = productService.createProduct(productName);
  console.log("Product added:", product);
  res.status(201).json(product);
});

module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
  createProduct,
};
