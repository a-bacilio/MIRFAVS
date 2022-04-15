import { getAllFavListService } from '../services/getAllFavList/getAllFavListService';
import { Types } from 'mongoose';

import { Request, Response } from "express";

export const getAllFavListController = async (
    req: Request<{}, {}, {}>,
    res: Response<any>,
) => {
    try {
        const userid: Types.ObjectId = new Types.ObjectId(req.userId);
        if (!req.userId) throw new Error("There is not userId");
        const User:any = await getAllFavListService(userid)
        res.status(200).json({User});
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
};
