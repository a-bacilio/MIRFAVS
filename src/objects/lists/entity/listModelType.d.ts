import { favCreateModelBody } from './../../favs/entity/favModelType.d';
import { listModelType } from './listModelType.d';
import { createListType } from './listType.d';
import { Types } from 'mongoose';

export interface listModelType extends createListType {
  _id: Types.ObjectId;
  favs?: [Types.ObjectId];
}

export type createListBody = Omit<listModelType, "_id">