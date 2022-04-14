import { userModelType } from './../entity/userModelType';
import { UserModel } from '../entity/userModel';
import { createUserBody } from "../entity/userType";


export const createUserService = async (userData: createUserBody): Promise<userModelType> => {
  try {
    
    const newUser: userModelType = await UserModel.create(userData)
    return newUser;
  } catch (error: any) {
    throw new Error(error);
  }
};
