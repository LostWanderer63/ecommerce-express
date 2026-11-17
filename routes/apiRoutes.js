const express = require("express");
const router = express.Router();
const { getProductsPage } = require("../controllers/viewController");
const { createProduct } = require("../controllers/productController");

router.get("/products", getProductsPage);
router.post("/products", createProduct);

module.exports = router;
