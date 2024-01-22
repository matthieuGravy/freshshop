"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jose_1 = require("jose");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function authMiddleware(req, res, next) {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).send("Access Denied");
    }
    try {
        // Convertir la clé secrète en Uint8Array
        const secretKey = new TextEncoder().encode(process.env.SESSION_SECRET);
        const { payload } = await (0, jose_1.jwtVerify)(token, secretKey);
        req.user = payload;
        return next();
    }
    catch (err) {
        res.status(400).send("Invalid Token");
    }
}
exports.default = authMiddleware;
