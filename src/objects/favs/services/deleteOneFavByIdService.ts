import { FavModel } from '../entity/favModel';
import { Types } from 'mongoose';
export const deleteOneFavByIdService = async (favId: Types.ObjectId): Promise<any> => {
    try {
        await FavModel.deleteOne({ _id: favId })
    } catch (error) {
        throw new Error(`Error deleting fav: ${JSON.stringify(favId)}`)
    }
}

