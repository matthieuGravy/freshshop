"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createUser_1 = __importDefault(require("../db/services/createUser"));
const login_1 = __importDefault(require("../db/controllers/login"));
const router = express_1.default.Router();
const userRegistration = new createUser_1.default();
router.post("/new-user", async (req, res) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        res.status(400).json({
            error: "Veuillez fournir tous les champs nécessaires (username, password, email).",
        });
        return;
    }
    try {
        //New mail(?)
        const register = await userRegistration.createRegister(username, password, email);
        res.json(register);
    }
    catch (err) {
        console.error(err instanceof Error ? err.message : err);
        res.status(500).send("Internal Server Error");
    }
});
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await login_1.default.login(email, password);
        if (user) {
            res.cookie("jwt", user.jwt, {
                httpOnly: true,
                // secure: true, // Décommenter en https
                //sameSite: "strict", // Décommenter en https
            });
            res.json({ connected: true, jwt: user.jwt, email: user.email });
            console.log(user.jwt);
        }
        else {
            res.status(404).json({ connected: false });
        }
    }
    catch (err) {
        console.error(err instanceof Error ? err.message : err);
        res.status(500).send("Internal Server Error");
    }
});
router.post("/logout", (_req, res) => {
    res.clearCookie("jwt");
    res.json({ disconnected: true });
    console.log("logout");
});
exports.default = router;
