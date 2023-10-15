export interface ITeam {
  id: string;
  name: string; //ex. Raiders
  abbreviation: string; //ex. LV
  displayName: string; //ex. Las Vegas Raiders
  shortDisplayName: string; //ex. Las Vegas
  color?: string;
  alternativeColor?: string;
  slug?: string; //ex. las-vegas-raiders
  logo?: string;
  scoreWins?: number;
  scoreLosses?: number;
  scoreTies?: number;
  scoreWinPercentage?: string;
  scoreHome?: string;
  scoreRoad?: string;
  scoreVersusDiv?: string;
  scoreVersusConf?: string;
  scorePointsFor?: number;
  scorePointsAgainst?: number;
  scorePointDifferential?: number;
  scoreStreak?: string;
  scoreScoreSummary?: string;
  scoreSeasonYear?: number;
  scoreSeasonName?: string;
}
