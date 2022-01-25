import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";

import Home from "./pages/Home";
import Bets from "./pages/Bets";
import Rank from "./pages/Rank";
import Teams from "./pages/Teams";

export enum RoutePath {
  LOG_IN = "/login",
  FORGOT_PASSWORD = "/forgot_password",
  HOME = "/home",
  BETS = "/bets",
  RANK = "/rank",
  TEAMS = "/teams",
}

export const navItem: SideBarNavItem[] = [
  {
    name: "Home",
    path: RoutePath.HOME,
    icon: HomeIcon,
  },
  {
    name: "Bets",
    path: RoutePath.BETS,
    icon: SportsFootballIcon,
  },
  {
    name: "Rank",
    path: RoutePath.RANK,
    icon: EmojiEventsIcon,
  },
  {
    name: "Teams",
    path: RoutePath.TEAMS,
    icon: GroupsIcon,
  },
];

export const routes: Route[] = [
  {
    name: "home",
    path: RoutePath.HOME,
    sideBarNavItem: navItem,
    component: Home,
  },
  {
    name: "bets",
    path: RoutePath.BETS,
    sideBarNavItem: navItem,
    component: Bets,
  },
  {
    name: "rank",
    path: RoutePath.RANK,
    sideBarNavItem: navItem,
    component: Rank,
  },
  {
    name: "teams",
    path: RoutePath.TEAMS,
    sideBarNavItem: navItem,
    component: Teams,
  },
];

export interface SideBarNavItem {
  name: string;
  path: string;
  icon: React.ComponentType;
}

export interface Route {
  name: string;
  path: RoutePath;
  sideBarNavItem?: SideBarNavItem[];
  component: React.ComponentType;
}
