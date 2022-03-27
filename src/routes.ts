import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";

import Home from "./pages/Home";
import Bets from "./pages/Bets";
import Teams from './pages/Teams';
import Standings from "./pages/Standings";
import Team from "./pages/Team";
import Login from "./pages/Login";
import Bettor from "./pages/Bettor";

export enum RoutePath {
  LOG_IN = "/login",
  FORGOT_PASSWORD = "/forgot_password",
  HOME = "/home",
  BETS = "/bets",
  TEAMS = "/teams",
  TEAM = "/team/:id",
  STANDINGS = "/standings",
  BETTOR = "bettor/:id"
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
    name: "Teams",
    path: RoutePath.TEAMS,
    icon: GroupsIcon,
  },
  {
    name: "Standings",
    path: RoutePath.STANDINGS,
    icon: EmojiEventsIcon,
  },
];

export const routes: Route[] = [
  {
    name: "login",
    path: RoutePath.LOG_IN,
    component: Login,
  },
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
    name: "Teams",
    path: RoutePath.TEAMS,
    sideBarNavItem: navItem,
    component: Teams,
  },
  {
    name: "Team",
    path: RoutePath.TEAM,
    component: Team,
  },
  {
    name: "Standings",
    path: RoutePath.STANDINGS,
    sideBarNavItem: navItem,
    component: Standings,
  },
  {
    name: "Bettor",
    path: RoutePath.BETTOR,
    component: Bettor,
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
