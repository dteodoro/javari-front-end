import { IBet } from "./bet";
import { RANK_STATUS, USER_ROLE } from "./constants";
import { IScore } from "./score";
import { ITeam } from "./team";

export interface IPlayer {
  bettorId: string;
  nickName: string;
  points?: number;
  currentPosition: number;
  previousPosition: number;
  favoriteTeam?: ITeam;
  score?: IScore;
  bets?: IBet[];
}
