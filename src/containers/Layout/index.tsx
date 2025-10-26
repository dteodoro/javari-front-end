import {
  AppBar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import style from "./styles.module.scss";
import { RoutePath, navItem } from "../../routes";
import PermissionComponent from "../../components/PermissionComponent";
import { useAuth } from "../../store/contexts/Auth/AuthContext";
import { useBettorContext } from "../../store/contexts/Auth/BettorContext";
import Loading from "../../components/Loading";

interface Props {
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const location = useLocation();
  const { betsOpen } = useBettorContext();
  const { loading, userLogged, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const [betOpenQty, setBetOpenQty] = useState(betsOpen);
  const [currentPage, setCurrentPage] = useState<string>(location.pathname);
  const navigate = useNavigate();

  useEffect(() => {
    setBetOpenQty(betsOpen);
  }, [betsOpen]);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [navigate]);

  return (
    <Box className={style.root} minHeight="100vh">
      {userLogged() && (
        <>
          <AppBar position="sticky" className={style.appBar}>
            <Toolbar>
              {userLogged() && (
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon
                    onClick={() => {
                      setOpen(!open);
                    }}
                  />
                </IconButton>
              )}
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {currentPage === RoutePath.TEAMS
                  ? "Teams"
                  : currentPage === RoutePath.BETS
                  ? "Schedules"
                  : currentPage === RoutePath.STANDINGS
                  ? "Standings"
                  : "Home"}
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={style.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{ paper: style.drawerPaper }}
          >
            <div className={style.drawerHeader}>
              <IconButton
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
              {navItem.map((item) => (
                <PermissionComponent key={item.name} role={item.permission}>
                  <ListItem
                    className={style.menuItems}
                    key={item.name}
                    button
                    onClick={() => {
                      setOpen(false);
                      navigate(item.path);
                    }}
                  >
                    <ListItemIcon>{<item.icon />}</ListItemIcon>
                    <ListItemText
                      className={style.menuItems}
                      primary={item.name}
                    />
                  </ListItem>
                </PermissionComponent>
              ))}
            </List>
            <Button
              className={style.logoutButton}
              onClick={() => {
                setOpen(!open);
                signOut();
                navigate("/");
                window.location.reload();
              }}
            >
              <ExitToAppIcon className={style.ico} /> Sair
            </Button>
          </Drawer>
        </>
      )}
      <div className={style.page}>
        {loading ? <Loading onLoading={loading} /> : <>{children}</>}
      </div>
      {userLogged() && (
        <Hidden smUp>
          <AppBar position="sticky" className={style.actionButtons}>
            <ButtonGroup className={style.actionsGroup}>
              {currentPage === RoutePath.STANDINGS ? (
                <Button
                  className={`${style.action} ${style.selected}`}
                  color="primary"
                >
                  <EmojiEventsIcon fontSize="large" />
                </Button>
              ) : (
                <Button
                  className={style.action}
                  onClick={() => navigate(RoutePath.STANDINGS)}
                >
                  <EmojiEventsIcon fontSize="large" />
                </Button>
              )}
              {currentPage === RoutePath.HOME ? (
                <Button
                  className={`${style.action} ${style.selected}`}
                  color="primary"
                >
                  <HomeIcon fontSize="large" />
                </Button>
              ) : (
                <Button
                  className={style.action}
                  onClick={() => navigate(RoutePath.HOME)}
                >
                  <HomeIcon fontSize="large" />
                </Button>
              )}
              {currentPage === RoutePath.BETS ? (
                <Button
                  className={`${style.action} ${style.selected}`}
                  color="primary"
                >
                  <Badge badgeContent={betOpenQty} color="secondary">
                    <SportsFootballIcon fontSize="large" />
                  </Badge>
                </Button>
              ) : (
                <Button
                  className={style.action}
                  onClick={() => navigate(RoutePath.BETS)}
                >
                  <Badge badgeContent={betOpenQty} color="secondary">
                    <SportsFootballIcon fontSize="large" />
                  </Badge>
                </Button>
              )}
            </ButtonGroup>
          </AppBar>
        </Hidden>
      )}
    </Box>
  );
}
