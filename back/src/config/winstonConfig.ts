// Winston
const winston = require("winston");
const { format } = winston;
const { combine, timestamp, printf } = format;

const logFormat = printf(
  ({
    level,
    message,
    timestamp,
  }: {
    level: string;
    message: string;
    timestamp: string;
  }) => {
    return `${timestamp} ${level}: ${message}`;
  }
);

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: "logfile.log", level: "info" }),
    new winston.transports.Console(),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: "exceptions.log" }),
  ],
});

process.on("unhandledRejection", (reason, promise) => {
  throw reason;
});

logger.info("Hello world", { customMetadata: "Some information" });
logger.error("Test error message", { stack: "stack trace" });

export default logger;
