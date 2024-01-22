"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const jose_1 = require("jose");
const bcrypt = require("bcrypt");
const registerSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    hashedPassword: {
        type: String,
        select: false,
    },
    registerDate: {
        type: Date,
        default: Date.now,
    },
    jwt: String,
}, {
    collection: "register",
});
// Générer une nouvelle paire de clés lors du démarrage de l'application
let privateKey;
let publicKey;
(0, jose_1.generateKeyPair)("RS256").then((keys) => {
    privateKey = keys.privateKey;
    publicKey = keys.publicKey;
});
registerSchema.methods.generateJWT = async function () {
    if (!privateKey) {
        throw new Error("Private key is not set");
    }
    // Générer un JWT avec l'identifiant et l'email
    const jwt = await new jose_1.SignJWT({ sub: this._id, email: this.email })
        // Définir l'en-tête protégé du JWT avec l'algorithme RS256
        .setProtectedHeader({ alg: "RS256" })
        // Définir la date d'expiration du JWT à 30 jours
        .setExpirationTime("30d")
        // Définir la date d'émission du JWT à maintenant
        .setIssuedAt()
        // Signer le JWT avec la clé privée
        .sign(privateKey);
    return jwt;
};
registerSchema.statics.verifyJWT = async function (jwt) {
    if (!publicKey) {
        throw new Error("Public key is not set");
    }
    if (!jwt) {
        throw new Error("JWT is not provided");
    }
    try {
        // Vérifier la signature du JWT avec la clé publique et récupérer le payload du JWT (sub et username)
        const { payload } = await (0, jose_1.jwtVerify)(jwt, publicKey);
        // convertit le payload du JWT en objet JavaScript et le renvoie
        return JSON.parse(payload.toString());
    }
    catch (err) {
        console.error("Invalid JWT:", err);
        return null;
    }
};
registerSchema.pre("save", async function (next) {
    const user = this;
    // Hash password only if it has been modified or is new
    if (!user.isModified("password")) {
        return next();
    }
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.hashedPassword = hashedPassword; // Update hashedPassword field
        console.log("Password hashed successfully:", hashedPassword);
        next();
    }
    catch (err) {
        console.error("Error hashing password:", err);
        next(err);
    }
});
registerSchema.methods.checkPassword = async function (password) {
    const user = this;
    try {
        console.log("Entered checkPassword method");
        console.log("Provided password:", password);
        console.log("Stored hashed password:", user.hashedPassword);
        const hashedPassword = user.hashedPassword;
        const same = await bcrypt.compare(password, hashedPassword);
        console.log("Password comparison result:", same);
        return same;
    }
    catch (err) {
        console.error("Error in checkPassword:", err);
        throw err;
    }
};
const Register = mongoose_1.default.model("Register", registerSchema);
exports.default = Register;
