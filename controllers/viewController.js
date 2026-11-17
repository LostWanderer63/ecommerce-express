const path = require("path");
const { sendErrorResponse } = require("../utils/response");

const getProductsPage = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "products.html"), (err) => {
    if (err) sendErrorResponse(res, err);
  });
};

module.exports = {
  getProductsPage,
};
