import { RANK_STATUS } from "./constants";

export interface IPlayer{
    id:number;
    name: string;
    fullName:string;
    points: number;
    position: number;
    rankStatus: RANK_STATUS;
}