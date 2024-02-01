"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const profile_1 = __importDefault(require("../models/profile"));
class ProfileService {
    static createOrUpdateProfile(profileData) {
        return profile_1.default.createOrUpdateProfile(profileData);
    }
}
exports.default = ProfileService;
