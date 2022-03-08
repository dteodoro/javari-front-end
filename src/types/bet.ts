import { BET_RESULT, BET_STATUS } from "./constants";
import { ISchedule } from "./schedule";
import { ITeam } from "./team";

export interface IBet{
    schedule: ISchedule,
    status: BET_STATUS,
    result?: BET_RESULT         
}