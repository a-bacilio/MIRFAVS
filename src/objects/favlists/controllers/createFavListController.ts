import { createListType } from '../../lists/entity/listType';
import { applicationMessageType } from '../../applicationMessages/types/applicationMessageTypes';
import { createFavListService } from '../services/createFavList/createFavListService';
import { Types } from 'mongoose';

import { Request, Response } from "express";

export const createFavListController = async (
    req: Request<{}, {}, {createListBody:createListType,userid:Types.ObjectId}>,
    res: Response<any>,
) => {
    try {
        const listBody: createListType = req.body.createListBody;
        const userid: Types.ObjectId = new Types.ObjectId(req.userId);
        if (Object.values(req.body).length === 0) throw new Error("There are missing parameters");
        if (Object.values(listBody).length === 0) throw new Error("There are missing parameters");
        const response: applicationMessageType = await createFavListService(listBody,userid);
        res.status(response.status||200).json({ message: response.message });
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
};
