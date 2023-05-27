export interface ITeam {
  id: string;
  name: string; //ex. Raiders
  abbreviation: string; //ex. LV
  displayName: string; //ex. Las Vegas Raiders
  shortDisplayName: string; //ex. Las Vegas
  color?: string;
  alternativeColor?: string;
  slug?: string; //ex. las-vegas-raiders
  logo: string;
  scoreScoreSummary?: string;
}
