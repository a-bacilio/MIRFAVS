import jwt from "jsonwebtoken";

export const createToken = (payload: {}, duration: string): string =>
  jwt.sign(payload, `${process.env.JWT_AUTH_SECRET}`, {
    expiresIn: duration,
  });

export const validateToken = (token: string) =>
  <jwt.UserIDJwtPayload>jwt.verify(token, `${process.env.JWT_AUTH_SECRET}`);