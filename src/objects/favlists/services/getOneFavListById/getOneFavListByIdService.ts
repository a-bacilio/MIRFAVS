import { ListModel } from './../../../lists/entity/listModel';
import { Types } from 'mongoose';

export const getOneFavListByIdService = async (listid: Types.ObjectId): Promise<any> => {
    try {

        const List = await ListModel.findById(listid).populate("favs");
        if (List) {
            return List;
        } else {
            throw new Error("That list doesnt exist")
        }

    } catch (error: any) {
        throw new Error(error.message)
    }
};
