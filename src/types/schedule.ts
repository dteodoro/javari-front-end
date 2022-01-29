import { ITeam } from "./team";

export interface ISchedule {
  id:number,
  matchDate: Date;
  matchStatus: string;
  competitors: {
    homeTeam: ITeam;
    awayTeam: ITeam;
  };
}
