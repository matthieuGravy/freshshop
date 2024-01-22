"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Mongoose et dotenv
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const dbURI = process.env.DB_URI;
const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log("⚡️ Connected to DB");
    }
    catch (err) {
        console.log(err);
    }
};
exports.default = connectDB;
