import React, { createContext, ReactNode, useState } from "react";
import { RANK_STATUS } from "../../types/constants";
import { IPlayer } from "../../types/player";

interface User {
  userName: string;
}

export const UserContext = createContext<IPlayer | undefined>(undefined);
UserContext.displayName = "userContext";

export default function UserProvider({ children }: { children: ReactNode }) {
  const player: IPlayer = {
    id: 1,
    name: "Dario",
    slug: "dario",
    fullName: "Dario Teodoro",
    points: 48,
    position: 1,
    rankStatus: RANK_STATUS.UP,
    favoriteTeam: {
      id: 1,
      logo: "/nfl.svg",
      name: "Raiders",
      nickName: "Las Vegas",
      displayName: "Las Vegas Raiders",
      abbreviation: "LV",
      stats: "(2-3-1)",
      favorite: true,
    },
    bets: [],
  };

  return <UserContext.Provider value={player}>{children}</UserContext.Provider>;
}
