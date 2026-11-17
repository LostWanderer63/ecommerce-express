const asyncHandler = require("../utils/asyncHandler");
const { requirePositiveInt } = require("../utils/validators");

const getCartForUser = asyncHandler((req, res) => {
  const userId = requirePositiveInt(req.params.userId, "userId");
  res.send(`Fetching cart for user with ID: ${userId}`);
});

const addProductToCart = asyncHandler((req, res) => {
  const userId = requirePositiveInt(req.params.userId, "userId");
  res.send(`Adding product to cart for user with ID: ${userId}`);
});

module.exports = {
  getCartForUser,
  addProductToCart,
};
