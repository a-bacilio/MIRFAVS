import { Types } from 'mongoose';
import { createUserType } from "./userType";

export interface userModelType extends createUserType {
  _id: Types.ObjectId;
  lists?: [Types.ObjectId];
};

export type createUserModelType = Omit<userModelType, "_id">;