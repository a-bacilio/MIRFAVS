import { Types } from 'mongoose';
import { UserModel } from '../../../users/entity/userModel';

export const validateListOwnershipService = async ( userid: Types.ObjectId, listid: Types.ObjectId): Promise<boolean> => {
    try {
        const User = await UserModel.findById(userid)
        if(User){
            if (User?.lists?.includes(listid)){
                return true;
            }else{
                throw new Error("that list doesnt belongs to you")    
            }
        }else{
            throw new Error("that user doesnt exist")
        }
        
    } catch (error:any) {
        throw new Error(error.message)
    }
};
