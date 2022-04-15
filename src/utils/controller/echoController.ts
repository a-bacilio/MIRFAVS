import { Request, Response } from "express";

export const echoController = async (
    req: Request<{}, {}, {}>,
    res: Response<any>,
) => {
    const {body, params, headers} = req;
    res.status(200).json({body, params, headers})
};
