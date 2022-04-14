import { applicationMessageType } from './../../../applicationMessages/types/applicationMessageTypes';
import { loginUserType } from './../../entity/userType';
import { loginUserService } from './loginUserService';
import { NextFunction, Request, Response } from "express";

export const loginUserController = async (
    req: Request<{}, {}, loginUserType>,
    res: Response<any>,
) => {
    try {
        const userBody: loginUserType = req.body;
        if (Object.values(userBody).length === 0) throw new Error("There are missing parameters");
        const response: applicationMessageType = await loginUserService(userBody);
        res.status(response.status || 200).json({ token: response.data?.token });
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
};
