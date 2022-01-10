import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';

import Home from "./pages/Home";
import Bets from "./pages/Bets";

export enum RoutePath {
    LOG_IN="/login",
    FORGOT_PASSWORD="/forgot_password",
    HOME="/home",
    BETS="/"
}

export const navItem: SideBarNavItem[] = [
    {
        name:"home",
        path:RoutePath.HOME,
        icon: HomeIcon
    },
    {
        name:"bets",
        path: RoutePath.BETS,
        icon: SportsFootballIcon
    }
];

export const routes : Route[] = [
    {
        name:"home",
        path: RoutePath.HOME,
        sideBarNavItem: navItem,
        component: Home
    },
    {
        name:"bets",
        path: RoutePath.BETS,
        sideBarNavItem: navItem,
        component: Bets
    }
];

export interface SideBarNavItem {
    name:string;
    path:string;
    icon: React.ComponentType;
}

export interface Route{
    name: string;
    path: RoutePath;
    sideBarNavItem? : SideBarNavItem[];
    component: React.ComponentType;
}

