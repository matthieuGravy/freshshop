"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Winston
const winston = require("winston");
const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    transports: [
        new winston.transports.File({ filename: "logfile.log", level: "info" }),
        new winston.transports.Console(),
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: "exceptions.log" }),
    ],
});
process.on("unhandledRejection", (reason) => {
    throw reason;
});
logger.info("Hello world", { customMetadata: "Some information" });
logger.error("Test error message", { stack: "stack trace" });
exports.default = logger;
