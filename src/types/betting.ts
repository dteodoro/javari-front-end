import { ICompetitor } from "./competitors";
import { BET } from "./constants";
import { ITeam } from "./team";

export interface IBetting {
  scheduleId?: string;
  bettorId?: string;
  teamId?: string;
  bet?: string;
  team?: ITeam;
  win?: boolean;
  score?: number;
}
