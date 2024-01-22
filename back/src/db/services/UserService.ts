import Register, { IRegister } from "../models/register";

class UserService {
  async findUserByEmail(email: string): Promise<IRegister | null> {
    const user = await Register.findOne({ email })
      .select("+hashedPassword +username")
      .lean();

    // If user is null, return null
    if (!user) {
      return null;
    }

    // Convert the user to the IRegister type
    const typedUser: IRegister = user as IRegister;

    return typedUser;
  }
}

export default UserService;
