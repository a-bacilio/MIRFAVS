import { createFavListController } from '../controllers/createFavListController';

import { Router } from "express";



export const favListRouter = Router();

favListRouter.post("", createFavListController);

