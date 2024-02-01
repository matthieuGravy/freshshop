import express, { Application } from "express";
import path from "path";

import configureCors from "./config/configuresCors";
import logger from "./config/winstonConfig";
import connectDB from "./db/index";
import profile from "./routes/profile";

import newUser from "./routes/user";

const app: Application = express();
const port = process.env.PORT || 4700;

configureCors(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

app.use("/", newUser);
app.use("/profile", profile);
app.use("/assets", express.static(path.join(__dirname, "assets/")));

// Utilisation du logger
logger.info("Ceci est un message d'information dans le fichier journal.");
logger.info("Server started");

app.listen(port, () => console.log(`🍿 Server running on port ${port}`));
