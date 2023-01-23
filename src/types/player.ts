import { IBet } from "./bet";
import { RANK_STATUS, USER_ROLE } from "./constants";
import { ITeam } from "./team";

export interface IPlayer{
    id:string;
    name: string;
    fullName:string;
    slug:string;
    roles?:string;
    points?: number;
    position?: number;
    rankStatus?: RANK_STATUS;
    favoriteTeam?: ITeam;
    bets?: IBet[]
}