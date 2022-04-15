import { getFavListService } from './../services/getFavList/getFavListService';
import { createListType } from '../../lists/entity/listType';
import { applicationMessageType } from '../../applicationMessages/types/applicationMessageTypes';
import { createFavListService } from '../services/createFavList/createFavListService';
import { Types } from 'mongoose';

import { Request, Response } from "express";

export const getFavListController = async (
    req: Request<{}, {}, {}>,
    res: Response<any>,
) => {
    try {
        const userid: Types.ObjectId = new Types.ObjectId(req.userId);
        if (!req.userId) throw new Error("There is not userId");
        const User:any = await getFavListService(userid)
        res.status(200).json({User});
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
};
