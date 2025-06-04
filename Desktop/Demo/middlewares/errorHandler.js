const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  // 🧠 Create clear message
  const logMsg = `❌ ${req.method} ${req.originalUrl} | ${statusCode} | ${err.message}`;

  // 🪵 Log internally (console + file)
  logger.error(logMsg, {
    method: req.method,
    route: req.originalUrl,
    statusCode,
    message: err.message,
    stack: err.stack
  });

  // 🎯 Clean client response
  res.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? 'Internal Server Error' : err.message,
    statusCode,
    timestamp: new Date().toISOString()
  });
};

module.exports = errorHandler;
