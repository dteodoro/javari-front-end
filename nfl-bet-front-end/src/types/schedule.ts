import { ITeam } from "./team";

export interface ISchedule {
  matchDate: Date;
  matchStatus: string;
  competitors: {
    homeTeam: ITeam;
    awayTeam: ITeam;
  };
}
