"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createUser_1 = __importDefault(require("../db/services/createUser"));
const router = (0, express_1.Router)();
const userService = new createUser_1.default();
router.post("/new-user", async (req, res) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        res.status(400).json({
            error: "Veuillez fournir tous les champs nécessaires (username, password, email).",
        });
        return;
    }
    try {
        //sendWelcomeEmail(email);
        const register = await userService.createRegister(username, password, email);
        res.json(register);
    }
    catch (err) {
        console.error(err instanceof Error ? err.message : err);
        res.status(500).send("Internal Server Error");
    }
});
exports.default = router;
