import { NextFunction, Request, Response } from "express";
import * as yup from "yup";


export const requestBodyValidator =
    (schema: yup.ObjectSchema<any>) =>
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                await schema.validate({
                    body: req.body,
                    params: req.params,
                    query: req.query,
                });
                return next();
            } catch (error: any) {
                res.status(400).json({ error: error.message })
            }
        };
