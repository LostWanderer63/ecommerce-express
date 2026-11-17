const productService = require("../services/productService");
const { sendErrorResponse, sendResponse, createError } = require("../utils/response");

const getAllProducts = (req, res) => {
  try {
    sendResponse(res, productService.getAllProducts());
  } catch (err) {
    sendErrorResponse(res, err);
  }
};

const addProduct = (req, res) => {
  try {
    sendResponse(res, productService.addProduct(), 201);
  } catch (err) {
    sendErrorResponse(res, err);
  }
};

const getProductById = (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      throw createError("Product id must be a positive integer", 400);
    }
    sendResponse(res, productService.getProductById(id));
  } catch (err) {
    sendErrorResponse(res, err);
  }
};

const createProduct = (req, res) => {
  try {
    const productName = req.body && req.body.productName;
    if (typeof productName !== "string" || !productName.trim()) {
      throw createError("productName is required", 400);
    }
    const product = productService.createProduct(productName.trim());
    console.log("Product added:", product);
    sendResponse(res, product, 201);
  } catch (err) {
    sendErrorResponse(res, err);
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
  createProduct,
};
