import { Router, Request, Response } from "express";
import CreateUser from "../db/services/createUser";

const router = Router();
const userService = new CreateUser();

router.post("/new-user", async (req: Request, res: Response) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    res.status(400).json({
      error:
        "Veuillez fournir tous les champs nécessaires (username, password, email).",
    });
    return;
  }
  try {
    //sendWelcomeEmail(email);
    const register = await userService.createRegister(
      username,
      password,
      email
    );
    res.json(register);
  } catch (err) {
    console.error(err instanceof Error ? err.message : err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
