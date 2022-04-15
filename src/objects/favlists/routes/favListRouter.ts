import { getFavListController } from './../controllers/getFavListController';
import { createFavListController } from '../controllers/createFavListController';

import { Router } from "express";



export const favListRouter = Router();

favListRouter.post("", createFavListController);
favListRouter.get("", getFavListController);

