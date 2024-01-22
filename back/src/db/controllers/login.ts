/*

import { Request, Response } from "express";
import UserService from "../services/userService";

class LoginController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async login(req: Request, res: Response) {
    const { username, password } = req.body;

    try {
      const user = await this.userService.authenticate(username, password);
      if (user) {
        req.session.user = user;
        res.status(200).send("Logged in successfully");
      } else {
        res.status(401).send("Invalid username or password");
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal server error");
    }
  }
}
*/

//export default LoginController;
