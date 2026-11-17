// Wraps a controller so sync throws and rejected promises reach the error middleware.
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve()
    .then(() => fn(req, res, next))
    .catch(next);
};

module.exports = asyncHandler;
