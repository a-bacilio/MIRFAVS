import { ListModel } from '../../../lists/entity/listModel';
import { Types } from 'mongoose';
import { deleteOneFavByIdService } from '../../../favs/services/deleteOneFavByIdService';
import { deleteOneListByIdService } from '../../../lists/services/deleteOneListByIdService';

export const deleteOneFavListByIdService = async (listId: Types.ObjectId): Promise<any> => {
    try {
        const List = await ListModel.findById(listId);
        if (List) {
            List.favs?.forEach(async fav => await deleteOneFavByIdService(fav));
            await deleteOneListByIdService(listId);
            return true
        } else {
            return false
        }
    } catch (error: any) {
        return false
    }
};
