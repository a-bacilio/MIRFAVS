import { createToken } from './../../../../utils/tokenization/tokenizationUtil';
import { validatePassword } from './../../../../utils/encription/passwordEncriptionUtil';
import { loginUserType } from './../../entity/userType.d';
import { applicationMessageType } from './../../../applicationMessages/types/applicationMessageTypes.d';
import { UserModel } from '../../entity/userModel';



export const loginUserService = async (loginUserData: loginUserType): Promise<applicationMessageType> => {
  try {
    const emailRegisteredUser:any = await UserModel.findOne({email:loginUserData.email});
    if(!emailRegisteredUser) throw new Error("This email is not registered");
    const passwordEvaluation = await validatePassword(loginUserData.password,emailRegisteredUser.password)

    const token = createToken({id:emailRegisteredUser._id},'24h')

    if (passwordEvaluation){
        return { message:"success", status: 200, data:{token}}
    }else{
        throw new Error("The password is incorrect")
    }
  } catch (error: any) {
    if(error.message){
      throw new Error(error.message)
    }else{
      throw new Error("An error happened during login")
    }
  }
};
