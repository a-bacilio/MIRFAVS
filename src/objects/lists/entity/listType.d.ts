import { Types } from 'mongoose';
import { favType, createFavType } from './../../favs/entity/favType.d';


export interface createListType {
    name: string;
}

export interface createListWithFavsType {
    name: string;
    favs?:[createFavType]
}



