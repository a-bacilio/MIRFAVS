import { validateToken } from './../../utils/tokenization/tokenizationUtil';
import { NextFunction, Request, Response } from "express";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization)
      return next(
        new Error("No token found")
      );
    const token = authorization.replace("Bearer ", "");
    const { id } = validateToken(token);
    if (!id) return next(new Error("Invalid Token"));

    req.userId = id;

    return next();
  } catch (error: any) {
    if (error.message === "jwt expired")
      return next(new Error("Expired Token"));
    return next({ error });
  }
};
