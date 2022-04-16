import { userModelType } from './../../../users/entity/userModelType.d';
import { Types } from 'mongoose';
import { UserModel } from '../../../users/entity/userModel';
export const removeListFromUserService = async (userId: Types.ObjectId, listId: Types.ObjectId) => {
    try {
        let user: any = await UserModel.findById(userId);
        user.lists.pull(listId);
        user.save();
        return true
    } catch (error: any) {
        return false;
    }

}