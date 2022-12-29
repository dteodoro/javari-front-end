import { ICompetitor } from "./competitors";
import { MatchResult } from "./match-result-enum";
import { ITeam } from "./team";

export interface ISchedule {
  id:string,
  startDate: Date;
  status: string;
  competitors: ICompetitor[]; 
  bet:string;
}
