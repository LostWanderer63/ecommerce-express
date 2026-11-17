const sendErrorResponse = (res, err) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    message: message,
    status: false,
  });
};

const sendResponse = (res, data, statusCode = 200) => {
  return res.status(statusCode).json({
    data: data,
  });
};

const createError = (message, statusCode) => {
  const err = new Error(message);
  err.statusCode = statusCode;
  return err;
};

module.exports = {
  sendErrorResponse,
  sendResponse,
  createError,
};
