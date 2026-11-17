const { sendErrorResponse, sendResponse, createError } = require("../utils/response");

const validateUserId = (userId) => {
  const id = Number(userId);
  if (!Number.isInteger(id) || id <= 0) {
    throw createError("User id must be a positive integer", 400);
  }
  return id;
};

const getCartForUser = (req, res) => {
  try {
    const userId = validateUserId(req.params.userId);
    sendResponse(res, `Fetching cart for user with ID: ${userId}`);
  } catch (err) {
    sendErrorResponse(res, err);
  }
};

const addProductToCart = (req, res) => {
  try {
    const userId = validateUserId(req.params.userId);
    sendResponse(res, `Adding product to cart for user with ID: ${userId}`, 201);
  } catch (err) {
    sendErrorResponse(res, err);
  }
};

module.exports = {
  getCartForUser,
  addProductToCart,
};
