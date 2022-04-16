import { applicationMessageType } from './../../../applicationMessages/types/applicationMessageTypes.d';
import { userModelType } from '../../entity/userModelType';
import { UserModel } from '../../entity/userModel';
import { createUserType } from "../../entity/userType";
import { encryptPassword } from '../../../../utils/encription/passwordEncriptionUtil';


export const createUserService = async (userData: createUserType): Promise<applicationMessageType> => {
  try {
    const emailRegisteredUser = await UserModel.find({email:userData.email});
    if(Object.values(emailRegisteredUser).length>0) throw new Error("This email has already been registered");
    const encryptedPassword = await encryptPassword(userData.password)
    const newUser: userModelType = await UserModel.create({ ...userData, password: encryptedPassword })
    if(newUser) {
      return { message:"success", status:201} 
    } else {
      return { message:"fail", status:500} 
    }
  } catch (error: any) {
    if(error.message){
      throw new Error(error.message)
    }else{
      throw new Error("An error happened during creation")
    }
  }
};
