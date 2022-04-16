import { createFavType } from '../entity/favType';
import { FavModel } from '../entity/favModel';
import { favModelType } from '../entity/favModelType';

export const createFavService = async (fav: createFavType): Promise<favModelType> => {
    try {
        const createdFav: any = await FavModel.create(fav);
        return createdFav;
    } catch (error: any) {
        throw new Error(error.message)
    }
};
