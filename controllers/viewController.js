const path = require("path");

const getProductsPage = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "products.html"));
};

module.exports = {
  getProductsPage,
};
