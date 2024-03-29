import { isAuthenticated } from './middlewares/authTokenValidation/isAuthenticated';
import { echoController } from './utils/controller/echoController';
import { favListRouter } from './objects/favlists/routes/favListRouter';
import { userRouter } from './objects/users/routes/userRouter';
import dotenv from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";

dotenv.config();
const app: Application = express();
app.use(express.json());

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res
        .status(err.statusCode || 500)
        .json({ type: err.errorType, msg: err.message, status: false });
});

app.use("/auth/local",userRouter);

app.use("/api/favs",isAuthenticated, favListRouter)

/**app.post("/echo",echoController)*/

export default app;