const express = require("express");
const router = express.Router();
const { getProductsPage } = require("../controllers/viewController");

router.get("/products", getProductsPage);

module.exports = router;
