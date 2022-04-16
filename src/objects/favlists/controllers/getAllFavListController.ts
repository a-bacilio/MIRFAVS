import { getAllFavListService } from '../services/getAllFavList/getAllFavListService';
import { Types } from 'mongoose';

import { Request, Response } from "express";
import { listModelType } from '../../lists/entity/listModelType';

export const getAllFavListController = async (
    req: Request<{}, {}, {}>,
    res: Response<any>,
) => {
    try {
        const userid: Types.ObjectId = new Types.ObjectId(req.userId);
        if (!req.userId) throw new Error("There is not userId");
        const userLists:listModelType[] = await getAllFavListService(userid)
        res.status(200).json(userLists);
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
};
