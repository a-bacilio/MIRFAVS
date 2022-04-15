import { getOneFavListByIdController } from './../controllers/getOneFavListByIdController';
import { getAllFavListController } from '../controllers/getAllFavListController';
import { createFavListController } from '../controllers/createFavListController';

import { Router } from "express";



export const favListRouter = Router();

favListRouter.post("", createFavListController);
favListRouter.get("", getAllFavListController);
favListRouter.get("/:id", getOneFavListByIdController);

