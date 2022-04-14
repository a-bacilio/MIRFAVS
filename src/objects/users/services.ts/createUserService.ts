import { UserModel } from './../entity/userSchema';
import { createUserBody } from "../entity/userType";


export const createUserService = async (userData: createUserBody): Promise<{}> => {
  try {
    
    const newUser: createUserBody = await UserModel.create(userData)
    return newUser;
  } catch (error: any) {
    throw new Error(error);
  }
};
