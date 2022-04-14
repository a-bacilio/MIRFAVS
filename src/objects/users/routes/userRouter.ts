import { loginUserController } from './../services/loginUser/loginUserController';
import { loginUserRequestBodyValidator } from './../validator/loginUserBodyValidator';
import { createUserRequestBodyValidator } from '../validator/createUserBodyValidator';
import { requestBodyValidator } from './../../../middlewares/requestBodyValidator.ts/requestBodyValidator';
import { Router } from "express";
import { createUserController } from "../services/CreateUser/createUserController";


export const userRouter = Router();

userRouter.post("/signup", requestBodyValidator(createUserRequestBodyValidator), createUserController);
userRouter.post("/login", requestBodyValidator(loginUserRequestBodyValidator), loginUserController);

