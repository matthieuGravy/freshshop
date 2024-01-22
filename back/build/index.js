"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const winstonConfig_1 = __importDefault(require("./config/winstonConfig"));
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
// Utilisation du logger
winstonConfig_1.default.info("Ceci est un message d'information dans le fichier journal.");
winstonConfig_1.default.info("Server started");
(0, index_1.default)();
app.listen(port, () => console.log(`🍿 Server running on port ${port}`));
