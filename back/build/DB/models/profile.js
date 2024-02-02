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
const profileSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "Register", // Référence au modèle Register IRegister
    },
    firstname: {
        type: String,
        required: false,
        unique: false,
    },
    lastname: {
        type: String,
        required: false,
        unique: false,
    },
    genre: {
        type: String,
        required: false,
        unique: false,
    },
    street: {
        type: String,
        required: false,
        unique: false,
    },
    houseNumber: {
        type: String,
        required: false,
        unique: false,
    },
    city: {
        type: String,
        required: false,
        unique: false,
    },
    country: {
        type: String,
        required: false,
        unique: false,
    },
}, {
    collection: "profile",
});
profileSchema.statics.createOrUpdateProfile = async function (profileData) {
    const profile = await this.findOne({ userId: profileData.userId });
    if (profile) {
        // Si le profil existe déjà, sinon màj
        Object.assign(profile, profileData);
        return profile.save();
    }
    else {
        // Sinon, créer un nouveau profil
        return this.create(profileData);
    }
};
const Profile = mongoose_1.default.model("Profile", profileSchema);
exports.default = Profile;
