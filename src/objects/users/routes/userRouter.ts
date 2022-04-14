import { Router } from "express";
import { createUserController } from "../services/CreateUser/createUserController";


export const userRouter = Router();

userRouter.post("/signup", createUserController);

