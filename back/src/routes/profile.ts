import express, { Router, Request, Response } from "express";
import ProfileService from "../db/services/ProfileService";

const router: Router = express.Router();

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const profileData = { ...req.body, userId: req.params.id };
    const profile = await ProfileService.createOrUpdateProfile(profileData);
    res.json(profile);
  } catch (err) {
    console.error(err instanceof Error ? err.message : err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
