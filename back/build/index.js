"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const configuresCors_1 = __importDefault(require("./config/configuresCors"));
const winstonConfig_1 = __importDefault(require("./config/winstonConfig"));
const index_1 = __importDefault(require("./db/index"));
const profile_1 = __importDefault(require("./routes/profile"));
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
const port = process.env.PORT || 4700;
(0, configuresCors_1.default)(app);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(0, index_1.default)();
app.use("/", user_1.default);
app.use("/profile", profile_1.default);
app.use("/assets", express_1.default.static(path_1.default.join(__dirname, "assets/")));
// Utilisation du logger
winstonConfig_1.default.info("Ceci est un message d'information dans le fichier journal.");
winstonConfig_1.default.info("Server started");
app.listen(port, () => console.log(`🍿 Server running on port ${port}`));
