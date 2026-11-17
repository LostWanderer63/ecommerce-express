const asyncHandler = require("../utils/asyncHandler");
const { requirePositiveInt } = require("../utils/validators");

const getAllUsers = asyncHandler((req, res) => {
  res.send("Fetching all users");
});

const addUser = asyncHandler((req, res) => {
  res.send("Adding a new user");
});

const getUserById = asyncHandler((req, res) => {
  const id = requirePositiveInt(req.params.id, "id");
  res.send(`Fetching user with ID: ${id}`);
});

module.exports = {
  getAllUsers,
  addUser,
  getUserById,
};
