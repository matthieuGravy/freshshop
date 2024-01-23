import express from "express";
const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:5137"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

const configureCors = (app: express.Application) => {
  app.use(cors(corsOptions));
};

export default configureCors;
