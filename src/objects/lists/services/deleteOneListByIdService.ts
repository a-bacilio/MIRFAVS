import { ListModel } from './../entity/listModel';

import { Types } from 'mongoose';
export const deleteOneListByIdService = async (listId: Types.ObjectId): Promise<any> => {
    try {
        await ListModel.deleteOne({ _id: listId })
    } catch (error) {
        throw new Error(`Error deleting list: ${JSON.stringify(listId)}`)
    }
}

