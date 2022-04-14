import { model, Schema, Types } from "mongoose";
import { userModelType } from "./userModelType";

const UserModelSchema = new Schema<userModelType>(
  {
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "a password is required"],
      minlength: [8, "a password must have at least 8 characters"],
      maxlength: [32, "a password must have at most 32 characters"],
      match: [/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_-])[A-Za-z\d@$!%*#?&_-]{8,32}$/,
      "a password must contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"]
    },
    lists: [
      {
      type:Types.ObjectId,
      ref: "List"
    }
  ]
  },
  {
    timestamps: true,
  }
);



export const UserModel = model<userModelType>("User", UserModelSchema);
