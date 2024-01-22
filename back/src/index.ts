import express, { Application } from "express";
const cors = require("cors");

import logger from "./config/winstonConfig";
import connectDB from "./db/index";

import newUser from "./routes/user";

const app: Application = express();
const port = process.env.PORT || 4700;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

const corsOptions = {
  origin: ["http://localhost:5137"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/", newUser);
// Utilisation du logger
logger.info("Ceci est un message d'information dans le fichier journal.");
logger.info("Server started");

app.listen(port, () => console.log(`🍿 Server running on port ${port}`));
