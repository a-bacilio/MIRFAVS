import { serviceMessageType } from './serviceMessageType';
export interface applicationMessageType extends serviceMessageType {
    status?: number;
}