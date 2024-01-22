"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const winston = require("winston");
const index_1 = __importDefault(require("./db/index"));
const app = express();
const port = process.env.PORT || 4700;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
    origin: ["http://localhost:5137"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};
app.use(cors(corsOptions));
// Winston
const { format } = winston;
const { combine, timestamp, printf } = format;
const logFormat = printf(({ level, message, timestamp, }) => {
    return `${timestamp} ${level}: ${message}`;
});
const logger = winston.createLogger({
    level: "info",
    format: combine(timestamp(), logFormat),
    transports: [
        new winston.transports.File({ filename: "logfile.log", level: "info" }),
        new winston.transports.Console(),
    ],
});
// Utilisation du logger
logger.info("Ceci est un message d'information dans le fichier journal.");
(0, index_1.default)();
app.listen(port, () => console.log(`🍿 Server running on port ${port}`));
