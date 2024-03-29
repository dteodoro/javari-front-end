export const CONFERENCES = ["AFC", "NFC"];

export const DIVISIONS = ["EAST", "NORTH", "SOUTH", "WEST"];
export enum RANK_STATUS {
  "UP",
  "DOWN",
  "NO_CHANGE",
}

export enum BET_STATUS {
  "OPEN",
  "ONGOING",
  "FINISHED",
}

export enum BET_RESULT {
  "HIT",
  "MISS",
}

export enum BET {
  "home",
  "away",
  "tie",
}

export enum USER_ROLE {
  "ROLE_USER",
  "ROLE_ADMIN",
}

export const API_CORE = "/api/v1/game";
export const API_AUTH = "/api/v1/auth";
export const API_CONNECTOR = "/api/v1/connector";
