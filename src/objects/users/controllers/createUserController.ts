import { createUserService } from '../services/CreateUser/createUserService';
import { createUserBody } from '../entity/userType';
import { NextFunction, Request, Response } from "express";
import { applicationMessageType } from '../../applicationMessages/types/applicationMessageTypes';

export const createUserController = async (
    req: Request<{}, {}, createUserBody>,
    res: Response<any>,
) => {
    try {
        const userBody: createUserBody = req.body;
        if (Object.values(userBody).length === 0) throw new Error("There are missing parameters");
        const response: applicationMessageType = await createUserService(userBody);
        res.status(response.status||201).json({ message: response.message });
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
};
