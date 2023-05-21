import ISeason from "./season";

export interface ISessionCalendar {
  label: string;
  alternateLabel: string;
  detail: string;
  week: number;
  startDate: Date;
  endDate: Date;
  season: ISeason;
}
