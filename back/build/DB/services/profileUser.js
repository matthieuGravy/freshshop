"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const profile_1 = __importDefault(require("../models/profile"));
class ProfileService {
    async createOrUpdateProfile(profileData) {
        const profile = await profile_1.default.findOneAndUpdate({ userId: profileData.userId }, // critère de recherche
        profileData, // nouvelles données
        { new: true, upsert: true } // options
        );
        // Renvoie le profil complet après sa création ou sa mise à jour
        return profile;
    }
}
exports.default = new ProfileService();
