const { sendErrorResponse, sendResponse, createError } = require("../utils/response");

const getAllUsers = (req, res) => {
  try {
    sendResponse(res, "Fetching all users");
  } catch (err) {
    sendErrorResponse(res, err);
  }
};

const addUser = (req, res) => {
  try {
    sendResponse(res, "Adding a new user", 201);
  } catch (err) {
    sendErrorResponse(res, err);
  }
};

const getUserById = (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      throw createError("User id must be a positive integer", 400);
    }
    sendResponse(res, `Fetching user with ID: ${id}`);
  } catch (err) {
    sendErrorResponse(res, err);
  }
};

module.exports = {
  getAllUsers,
  addUser,
  getUserById,
};
