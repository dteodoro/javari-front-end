export interface ISchedule {
  matchDate: Date;
  matchStatus: string;
  competitors: {
    homeTeam: {
      id: number;
      logo: string;
      fullName: string;
      mediumName: string;
      shortName: string;
      stats?: string;
    };
    awayTeam: {
      id: number;
      logo: string;
      fullName: string;
      mediumName: string;
      shortName: string;
      stats?: string;
    };
  };
}
