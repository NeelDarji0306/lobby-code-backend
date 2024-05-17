const errorMiddleware = (err, req, res, next) => {
  err.message ||= "Internal Server Error";

  const response = {
    success: false,
    message: err.message,
  };

  return res.status(500).json(response);
};

export { errorMiddleware };
