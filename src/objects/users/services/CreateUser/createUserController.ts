import { createUserService } from './createUserService';
import { createUserBody } from './../../entity/userType.d';
import { NextFunction, Request, Response } from "express";

export const createUserController = async (
    req: Request<{}, {}, createUserBody>,
    res: Response<any>,
) => {
    try {
        const userBody: createUserBody = req.body;
        if (Object.values(userBody).length === 0) throw new Error("There are missing parameters");
        const response: { message: string, status: number } = await createUserService(userBody);
        res.status(response.status).json({ message: response.message });
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
};
