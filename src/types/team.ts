export interface ITeam {
    id: number;
    slug?:string; //ex. las-vegas-raiders
    logo: string;
    name: string; //ex. Raiders
    nickName: string; //ex. Las Vegas
    displayName: string; //ex. Las Vegas Raiders
    abbreviation: string; //ex. LV
    stats?: string;
    color?:string;
    alternativeColor?:string,
    favorite?:boolean,
}
