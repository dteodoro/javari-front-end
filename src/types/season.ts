import { ISchedule } from "./schedule";

export default interface ISeason {
  name: string;
  label: string;
  competitionYear: number;
  schedules: ISchedule[];
}
