import { favListValidator } from './../validator/favListValidator';
import { createListType } from '../../lists/entity/listType';
import { applicationMessageType } from '../../applicationMessages/types/applicationMessageTypes';
import { createFavListService } from '../services/createFavList/createFavListService';
import { Types } from 'mongoose';

import { Request, Response } from "express";

export const createFavListController = async (
    req: Request<{}, {}, createListType>,
    res: Response<any>,
) => {
    try {
        const listBody: createListType = req.body;
        const userid: Types.ObjectId = new Types.ObjectId(req.userId);
        if (!req.userId) throw new Error("There are missing parameters");
        if (Object.values(listBody).length === 0) throw new Error("There are missing parameters");
        if (!favListValidator(listBody)) throw new Error("Some favs are invalid");
        const response: applicationMessageType = await createFavListService(listBody,userid);
        res.status(response.status||200).json({message:response.message,error:response.error});
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
};
