import { userModelType } from './../entity/userModelType';
import { UserModel } from '../entity/userModel';
import { createUserType } from "../entity/userType";
import { encryptPassword } from '../../../utils/encription/passwordEncriptionUtil';


export const createUserService = async (userData: createUserType): Promise<userModelType> => {
  try {
    const encryptedPassword = await encryptPassword(userData.password)
    const newUser: userModelType = await UserModel.create({ ...userData, password: encryptedPassword })
    return newUser;
  } catch (error: any) {
    throw new Error(error);
  }
};
