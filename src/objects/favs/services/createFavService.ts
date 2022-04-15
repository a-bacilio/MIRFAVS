import { createFavType } from '../entity/favType';
import { FavModel } from '../entity/favModel';
import { favModelType } from '../entity/favModelType';

export const createFavService = async (fav: createFavType): Promise<favModelType> => {
    try{
        const createdFav:any = await FavModel.create(fav)
        return createdFav;
    }catch(error){
        throw new Error(`An error happen when trying to create ${JSON.stringify(fav)}`)
    }
};
