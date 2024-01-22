"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createUser_1 = __importDefault(require("../db/services/createUser"));
router.post("/", async (req, res) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        res.status(400).json({
            error: "Veuillez fournir tous les champs nécessaires (username, password, email).",
        });
        return;
    }
    try {
        //sendWelcomeEmail(email);
        const register = await createUser_1.default.createRegister(username, password, email);
        res.json(register);
    }
    catch (err) {
        console.error(err instanceof Error ? err.message : err);
        res.status(500).send("Internal Server Error");
    }
});
exports.default = router;
