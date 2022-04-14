import { userModelType } from '../../entity/userModelType';
import { UserModel } from '../../entity/userModel';
import { createUserType } from "../../entity/userType";
import { encryptPassword } from '../../../../utils/encription/passwordEncriptionUtil';


export const createUserService = async (userData: createUserType): Promise<{message:string, status: number, error?:any}> => {
  try {
    const encryptedPassword = await encryptPassword(userData.password)
    const newUser: userModelType = await UserModel.create({ ...userData, password: encryptedPassword })
    if(newUser) {
      return { message:"success", status: 200} 
    } else {
      return { message:"fail", status: 400} 
    }
  } catch (error: any) {
    throw new Error("An error happened during creation")
  }
};
