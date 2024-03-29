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
    },
    lists: [
      {
        type: Types.ObjectId,
        ref: "List"
      }
    ]
  },
  {
    timestamps: true,
  }
);

UserModelSchema.methods.toJSON = function UserReturn() {
  const thisObject = this.toObject();
  return {  ...thisObject, id:thisObject?._id };
};

export const UserModel = model<userModelType>("User", UserModelSchema);
