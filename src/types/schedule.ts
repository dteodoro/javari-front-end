import { IBetting } from "./betting";
import { ICompetitor } from "./competitors";
import { MatchResult } from "./match-result-enum";
import ISession from "./season";
import { ISessionCalendar } from "./seasonCalendar";
import { ITeam } from "./team";

export interface ISchedule {
  id: string;
  name: string;
  shortName: string;
  startDate: Date;
  status: string;
  competitors: ICompetitor[];
  seasonCalendar: ISessionCalendar;
  bet?: IBetting;
}
