import { Types } from "mongoose";
import { string } from "yup";


export interface createUser {
    email: string;
    password: string;
    passwordConfirmation: string;
}

export type  createUserBody = Omit<createUser, "passwordConfirmation">;

export interface UserType extends createUserBody {
  _id: string;
  favs: []
}

