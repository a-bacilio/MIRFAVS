import { ListModel } from './../entity/listModel';
import { listModelType } from '../entity/listModelType';
import { createListWithFavsType } from './../entity/listType.d';

export const createListService = async (list: createListWithFavsType): Promise<listModelType> => {
    try{
        const createdList:any = await ListModel.create({name:list.name})
        return createdList;
    }catch(error){
        throw new Error(`An error happen when trying to create a list`)
    }
};
