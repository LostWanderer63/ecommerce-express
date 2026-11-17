const AppError = require("./AppError");

const requirePositiveInt = (value, field) => {
  const n = Number(value);
  if (!Number.isInteger(n) || n <= 0) {
    throw AppError.badRequest(`${field} must be a positive integer`, {
      field,
      value,
    });
  }
  return n;
};

const requireNonEmptyString = (value, field) => {
  if (typeof value !== "string" || !value.trim()) {
    throw AppError.badRequest(`${field} is required`, { field });
  }
  return value.trim();
};

module.exports = { requirePositiveInt, requireNonEmptyString };
