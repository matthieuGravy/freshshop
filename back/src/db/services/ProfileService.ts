import Profile, { IProfile } from "../models/profile";

class ProfileService {
  static createOrUpdateProfile(profileData: Partial<IProfile>) {
    return Profile.createOrUpdateProfile(profileData);
  }
}

export default ProfileService;
