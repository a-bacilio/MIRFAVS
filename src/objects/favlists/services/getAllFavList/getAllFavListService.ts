import { Types } from 'mongoose';
import { UserModel } from '../../../users/entity/userModel';

export const getAllFavListService = async ( userid: Types.ObjectId): Promise<any> => {
    try {
        const User = await UserModel.findById(userid).populate([{path:"lists",populate: {
            path: 'favs',
            model: 'Fav'
          }}])
        return User?.lists;
    } catch (error:any) {
        throw new Error(error.message)
    }
};
