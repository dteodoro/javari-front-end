import { IBet } from "./bet";
import { RANK_STATUS } from "./constants";
import { ITeam } from "./team";

export interface IPlayer{
    id:number;
    name: string;
    fullName:string;
    slug:string;
    points?: number;
    position?: number;
    rankStatus?: RANK_STATUS;
    favoriteTeam?: ITeam;
    bets?: IBet[]
}