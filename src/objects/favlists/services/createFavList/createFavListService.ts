import { createListService } from './../../../lists/services/createListService';
import { addFavToListService } from './../addFav/addFavToListService';
import { createFavType } from './../../../favs/entity/favType.d';
import { createListWithFavsType } from './../../../lists/entity/listType.d';
import { addListToUser } from './../addList/addListToUser';
import { createFavService } from '../../../favs/services/createFavService';
import { Types } from 'mongoose';
import { applicationMessageType } from './../../../applicationMessages/types/applicationMessageTypes.d';

export const createFavListService = async (ListData: createListWithFavsType, userid: Types.ObjectId): Promise<applicationMessageType> => {
    try {
        let createdList:any = await createListService(ListData);
        await addListToUser(createdList._id, userid)
        if (ListData.favs && ListData.favs?.length > 0) {
            ListData.favs.forEach(async (fav:createFavType) => {
                const createdFav: any = await createFavService(fav as createFavType);
                await addFavToListService(createdFav._id,createdList._id)
            })
        }

    } catch (error) {
        throw new Error("Error creating list")
    }
    return { message: "success", status: 201 }
};
