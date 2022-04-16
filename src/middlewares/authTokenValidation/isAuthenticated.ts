import { validateToken } from './../../utils/tokenization/tokenizationUtil';
import { NextFunction, Request, Response } from "express";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      res.status(500).json({ error: "No token provided" })
      return;
    }
    const token = authorization.replace("Bearer ", "");
    const { id } = validateToken(token);
    if (!id) {
      res.status(500).json({ error: "Token Invalid" })
      return;
    } else {
      req.userId = id;
      return next();
    }
  } catch (error: any) {
    if (error.message === "jwt expired") {
      res.status(500).json({ error: "expired token" })
      return;
    }else{
      res.status(500).json({ error: `${JSON.stringify(error)}` })
      return;
    }
  }
};
