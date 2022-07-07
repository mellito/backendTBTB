function handleError(app) {
  app.use((err, req, res, next) => {
    const erroStatus = err.statusCode || 500;
    const errorMessages = err.messages || "Server error";
    return res.status(erroStatus).json({
      status: erroStatus,
      error: errorMessages,
      success: false,
      message: err.message,
      stack: err.stack,
    });
  });
}

module.exports = handleError;
