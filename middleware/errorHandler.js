const AppError = require("../utils/AppError");

const STATUS_NAMES = {
  400: "Bad Request",
  404: "Not Found",
  500: "Internal Server Error",
};

// Single place where every error in the app is turned into a response.
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  let error = err;

  // Malformed JSON body from express.json()
  if (err.type === "entity.parse.failed") {
    error = AppError.badRequest("Malformed JSON in request body");
  }

  if (!(error instanceof AppError)) {
    console.error("Unexpected error:", err);
    error = new AppError("Something went wrong", 500);
  }

  const { statusCode, message, details } = error;

  const body = {
    success: false,
    error: {
      statusCode,
      status: STATUS_NAMES[statusCode] || "Error",
      message,
      path: req.originalUrl,
      method: req.method,
      timestamp: new Date().toISOString(),
    },
  };

  if (details) body.error.details = details;
  if (process.env.NODE_ENV === "development" && err.stack) {
    body.error.stack = err.stack;
  }

  res.status(statusCode).json(body);
};

module.exports = errorHandler;
