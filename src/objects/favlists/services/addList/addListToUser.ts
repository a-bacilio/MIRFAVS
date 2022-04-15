import { UserModel } from './../../../users/entity/userModel';
import { Types } from 'mongoose';
import { applicationMessageType } from '../../../applicationMessages/types/applicationMessageTypes';

export const addListToUser = async (listId: Types.ObjectId, userId: Types.ObjectId): Promise<applicationMessageType> => {
    try{
        const selectedUser:any = await UserModel.findById(userId);
        if(!selectedUser) new Error("User not found");
        try{
            await selectedUser.lists.push(listId);
            selectedUser.save();
        }catch(error){
            throw new Error("List couldnt be added to User")
        }
    }catch(error){
        throw new Error("User not found")
    }
    return {message:"successful addition"}
};
