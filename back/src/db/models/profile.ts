import mongoose, { Schema, Document, Model } from "mongoose";

interface IProfile extends Document {
  userId: mongoose.Schema.Types.ObjectId; // Référence au modèle Register IRegister
  firstname: string;
  lastname: string;
  birthdate: Date | null;
  genre: string;
  street: string;
  houseNumber: string;
  city: string;
  country: string;
  picture: string;
  description: string;
}
interface IProfileModel extends Model<IProfile> {
  createOrUpdateProfile(profileData: Partial<IProfile>): Promise<IProfile>;
}

const profileSchema = new Schema<IProfile>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Register", // Référence au modèle Register IRegister
    },
    firstname: {
      type: String,
      required: false,
      unique: false,
    },
    lastname: {
      type: String,
      required: false,
      unique: false,
    },
    birthdate: {
      type: Date,
      required: false,
      unique: false,
    },
    genre: {
      type: String,
      required: false,
      unique: false,
    },
    street: {
      type: String,
      required: false,
      unique: false,
    },
    houseNumber: {
      type: String,
      required: false,
      unique: false,
    },
    city: {
      type: String,
      required: false,
      unique: false,
    },
    country: {
      type: String,
      required: false,
      unique: false,
    },
    picture: {
      type: String,
      required: false,
      unique: false,
    },
    description: {
      type: String,
      required: false,
      unique: false,
    },
  },
  {
    collection: "profile",
  }
);

profileSchema.statics.createOrUpdateProfile = async function (
  profileData: Partial<IProfile>
) {
  const profile = await this.findOne({ _id: profileData._id });
  if (profile) {
    // Si le profil existe déjà, sinon màj
    Object.assign(profile, profileData);
    return profile.save();
  } else {
    // Sinon, créer un nouveau profil
    return this.create(profileData);
  }
};

const Profile = mongoose.model<IProfile, IProfileModel>(
  "Profile",
  profileSchema
);

export default Profile;
export { IProfile, IProfileModel };
