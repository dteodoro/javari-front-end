import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from '@mui/icons-material/Settings';

import Home from "./pages/Home";
import Bets from "./pages/Bets";
import Teams from './pages/Teams';
import Standings from "./pages/Standings";
import Team from "./pages/Team";
import Bettor from "./pages/Bettor";
import Settings from "./pages/Settings";
import { USER_ROLE } from "./types/constants";

export enum RoutePath {
  FORGOT_PASSWORD = "/forgot_password",
  HOME = "/home",
  BETS = "/bets",
  TEAMS = "/teams",
  TEAM = "/team/:id",
  STANDINGS = "/standings",
  BETTOR = "bettor/:id",
  SETTINGS = "/config",
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
  {
    name: "Settings",
    path : RoutePath.SETTINGS,
    icon: SettingsIcon,
    permission: 'ROLE_ADMIN'
  }
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
  {
    name: "Settings",
    path: RoutePath.SETTINGS,
    sideBarNavItem: navItem,
    component: Settings,
  },
];

export interface SideBarNavItem {
  name: string;
  path: string;
  icon: React.ComponentType;
  permission?:string;
}

export interface Route {
  name: string;
  path: RoutePath;
  sideBarNavItem?: SideBarNavItem[];
  component: React.ComponentType;
  permission?: string;
}
