import { ITeam } from "./team";

export interface ICompetitor{
    homeAway:string;
    winner:boolean;
    score:number;
    team:ITeam;
}