import express, { Router, Request, Response } from "express";
import ProfileService from "../db/services/ProfileService";

const router: Router = express.Router();

router.post("/:id", async (req: Request, res: Response) => {
  const profileData = req.body;
  const profile = await ProfileService.createOrUpdateProfile(profileData);
  res.json(profile);
});

export default router;
