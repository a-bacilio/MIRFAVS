import { ListModel } from '../../../lists/entity/listModel';
import { Types } from 'mongoose';
import { applicationMessageType } from '../../../applicationMessages/types/applicationMessageTypes';

export const addFavToListService = async (favId: Types.ObjectId, listId: Types.ObjectId): Promise<applicationMessageType> => {
    try{
        let selectedList:any = await ListModel.findById(listId);
        
        if(!selectedList) throw new Error("List not found");
        try{
            selectedList.favs.push(favId);
            selectedList.save();
        }catch(error){
            throw new Error("Fav couldnt be added to List")
        }
    }catch(error){
        throw new Error("List not found")
    }
    return {message:"successfull addition to List"}
};
