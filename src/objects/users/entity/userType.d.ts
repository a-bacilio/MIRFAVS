import { Types } from 'mongoose';
import { favType } from './../../favs/entity/favType.d';

export interface createUserBody {
    email: string;
    password: string;
    passwordConfirmation: string;
}

export type createUserType = Omit<createUserBody, "passwordConfirmation">;


