import { model, Schema } from "mongoose";
import { UserType } from "./userType";

const UserSchema = new Schema<UserType>(
  {
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
      minlength: [8, "La contraseña debe de ser mínimo 8 caracteres"],
    },
  },
  {
    timestamps: true,
  }
);



export const UserModel = model<UserType>("User", UserSchema);
