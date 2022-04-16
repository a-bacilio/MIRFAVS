import { removeListFromUserService } from './../services/removeListFromUser/removeListFromUserService';
import { validateListOwnershipService } from '../utils/validateListOwnerShip/validateListOwnershipService';
import { Types } from 'mongoose';

import { Request, Response } from "express";
import { deleteOneFavListByIdService } from '../services/deleteOneFavListById/deleteOneFavListByIdService';

export const deleteOneFavListByIdController = async (
    req: Request<{id:string}, {}, {}>,
    res: Response<any>,
) => {
    try {
        const {id} = req.params;
        if (!req.userId) throw new Error("There is not userId");
        const listId = new Types.ObjectId(id);
        const userid: Types.ObjectId = new Types.ObjectId(req.userId);
        const ownership:boolean = await validateListOwnershipService(userid,listId)
        if(ownership){
            const deleteFavList = await deleteOneFavListByIdService(listId)
            const removeFavList = await removeListFromUserService(userid,listId)
            if(!deleteFavList) res.status(500).json({error:"list couldnt be deleted"});
            if(!removeFavList) res.status(500).json({error:"list couldnt be removed"});
            if(removeFavList&&deleteFavList) res.status(200).json({message:"list deleted"});
        }else{
            throw new Error("This list doesnt belongs to the user");
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
};
