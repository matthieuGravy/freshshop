const express = require("express");
const cors = require("cors");

import logger from "./config/winstonConfig";
import connectDB from "./db/index";

const app = express();
const port = process.env.PORT || 4700;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: ["http://localhost:5137"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));

// Utilisation du logger
logger.info("Ceci est un message d'information dans le fichier journal.");
logger.info("Server started");

connectDB();

app.listen(port, () => console.log(`🍿 Server running on port ${port}`));
