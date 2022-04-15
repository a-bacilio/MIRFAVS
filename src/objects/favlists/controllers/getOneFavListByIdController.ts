import { getOneFavListByIdService } from './../services/getOneFavListById/getOneFavListByIdService';
import { validateListOwnershipService } from '../services/getOneFavListById/validateListOwnershipService';
import { Types } from 'mongoose';

import { Request, Response } from "express";
import { listModelType } from '../../lists/entity/listModelType';

export const getOneFavListByIdController = async (
    req: Request<{id:string}, {}, {}>,
    res: Response<any>,
) => {
    try {
        const {id} = req.params;
        if (!req.userId) throw new Error("There is not userId");
        const listId = new Types.ObjectId(id);
        const userid: Types.ObjectId = new Types.ObjectId(req.userId);
        const ownership:boolean = await validateListOwnershipService(userid,listId)
        if(ownership){
            const List:listModelType = await getOneFavListByIdService(listId)
            res.status(200).json({List});
        }else{
            throw new Error("This list doesnt belongs to the user");
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
};
