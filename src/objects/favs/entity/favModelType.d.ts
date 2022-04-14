import { Types } from 'mongoose';
import { createFavType } from './favType';

export interface favModelType extends createFavType {
    _id: Types.ObjectId;
}

export type createfavModelBody = Omit<favModelType,"_id">
