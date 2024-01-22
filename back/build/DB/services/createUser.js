"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = __importDefault(require("../models/register"));
const profile_1 = __importDefault(require("../models/profile"));
const profileUser_1 = __importDefault(require("./profileUser"));
class CreateUser {
    async createRegister(username, password, email) {
        const newRegister = new register_1.default({
            username,
            password,
            email,
        });
        const savedRegister = await newRegister.save(); // Sauvegarder d'abord le nouvel utilisateur
        const profileData = {
            userId: savedRegister._id, // Utiliser l'ID du nouvel utilisateur
            firstname: "",
            lastname: "",
            birthdate: null,
            genre: "",
            street: "",
            houseNumber: "",
            city: "",
            country: "",
            picture: "",
            description: "",
        };
        await profileUser_1.default.createOrUpdateProfile(profileData); // Utiliser la méthode correcte de ProfileService
        const jwt = await savedRegister.generateJWT();
        savedRegister.jwt = jwt;
        return await savedRegister.save();
    }
    async createOrUpdateProfile(profileData) {
        const profile = await profile_1.default.findOneAndUpdate({ userId: profileData.userId }, // critère de recherche
        profileData, // nouvelles données
        { new: true, upsert: true } // options
        );
        // Renvoie le profil complet après sa création ou sa mise à jour
        return profile;
    }
    async getAllRegisters() {
        return await register_1.default.find();
    }
    async getUser(id) {
        return await register_1.default.findById(id);
    }
    // à modifier : désactiver l'utilisateur au lieu de le supprimer
    async deleteUser(id) {
        try {
            const deletedUser = await register_1.default.findByIdAndDelete(id);
            // Vérifier si un utilisateur a été supprimé
            if (deletedUser) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.error("Error deleting user:", error);
            throw new Error("Error deleting user");
        }
    }
}
exports.default = CreateUser;
