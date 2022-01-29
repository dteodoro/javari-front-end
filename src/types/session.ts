import { ISchedule } from "./schedule";

export interface ISession{
    name:string,
    schedules:ISchedule[]
}