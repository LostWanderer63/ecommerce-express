const path = require("path");
const asyncHandler = require("../utils/asyncHandler");

const getProductsPage = asyncHandler((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "view", "products.html"), (err) => {
    if (err) next(err);
  });
});

module.exports = {
  getProductsPage,
};
