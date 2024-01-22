import { IRegister } from "../models/register";
import UserService from "../services/UserService"; // Assurez-vous que ce chemin est correct

class LoginController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async login(
    email: string,
    password: string
  ): Promise<{ user: IRegister; jwt: string } | null> {
    try {
      const register = await this.userService.findUserByEmail(email); // Utilisez userService ici

      if (!register) {
        console.log("User not found with email:", email);
        return null; // L'utilisateur n'existe pas
      }

      const passwordMatch = await register.checkPassword(password);

      if (passwordMatch) {
        console.log("User logged in successfully:", email);
        const jwt = await register.generateJWT(); // Générer un JWT pour l'utilisateur
        return { user: register, jwt }; // Retourner l'utilisateur et le JWT
      } else {
        console.log("Invalid password for user:", email);
        return null;
      }
    } catch (err) {
      console.error("Error during login:", err);
      throw err;
    }
  }
}

export default LoginController;
