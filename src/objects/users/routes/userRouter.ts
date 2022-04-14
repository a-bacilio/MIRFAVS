import { createUserRequestBodyValidator } from './../validator/createUserBodyValidator';
import { requestBodyValidator } from './../../../middlewares/requestBodyValidator.ts/requestBodyValidator';
import { Router } from "express";
import { createUserController } from "../services/CreateUser/createUserController";


export const userRouter = Router();

userRouter.post("/signup", requestBodyValidator(createUserRequestBodyValidator), createUserController);

