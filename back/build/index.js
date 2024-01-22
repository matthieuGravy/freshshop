"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const winstonConfig_1 = __importDefault(require("./config/winstonConfig"));
const index_1 = __importDefault(require("./db/index"));
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
const port = process.env.PORT || 4700;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(0, index_1.default)();
const corsOptions = {
    origin: ["http://localhost:5137"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};
app.use(cors(corsOptions));
app.use("/", user_1.default);
// Utilisation du logger
winstonConfig_1.default.info("Ceci est un message d'information dans le fichier journal.");
winstonConfig_1.default.info("Server started");
app.listen(port, () => console.log(`🍿 Server running on port ${port}`));
