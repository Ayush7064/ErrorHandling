const { createLogger, format, transports } = require('winston');
const path = require('path');

// 🖨️ Custom Console Log Format (pretty, readable)
const consoleLogFormat = format.printf(({ level, message, timestamp }) => {
  return `🧩 [${timestamp}] ${level.toUpperCase()} → ${message}`;
});

// 📦 Logger Configuration
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat()
  ),
  transports: [
    // 🔴 File: Save only errors
    new transports.File({
      filename: path.join('logs', 'error.log'),
      level: 'error',
      format: format.combine(format.json())
    }),

    // 🟢 File: Save all logs
    new transports.File({
      filename: path.join('logs', 'combined.log'),
      format: format.combine(format.json())
    })
  ]
});

// 🎨 Add colorful console logs in development
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize({ all: true }),
      consoleLogFormat
    )
  }));
}

module.exports = logger;
