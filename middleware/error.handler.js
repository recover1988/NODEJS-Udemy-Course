function errorLogs(err, req, res, next) {
  console.log("errorLogs");
  console.log(err);
  next(err);
}

function handlerError(err, req, res, next) {
  console.log("handlerError");
  res.status(501).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = {
  errorLogs,
  handlerError,
};
