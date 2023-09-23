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

import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import style from "./styles.module.scss";
import { navItem } from "../../routes";
import PermissionComponent from "../../components/PermissionComponent";
import { useAuth } from "../../store/contexts/Auth/AuthContext";
import { useBettorContext } from "../../store/contexts/Auth/BettorContext";

interface Props {
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const { betsOpen } = useBettorContext();
  const [open, setOpen] = useState(false);
  const [betOpenQty, setBetOpenQty] = useState(betsOpen);
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    setBetOpenQty(betsOpen);
  }, [betsOpen]);

  return (
    <Box className={style.root} minHeight="100vh">
      {auth.userLogged() && (
        <>
          <AppBar position="sticky" className={style.appBar}>
            <Toolbar>
              {auth.userLogged() && (
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
                NFL
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
                auth.signOut();
                navigate("/");
                window.location.reload();
              }}
            >
              <ExitToAppIcon className={style.ico} /> Sair
            </Button>
          </Drawer>
        </>
      )}
      <div className={style.page}>{children}</div>
      {auth.userLogged() && (
        <Hidden smUp>
          <AppBar position="sticky" className={style.actionButtons}>
            <ButtonGroup className={style.actionsGroup}>
              <IconButton
                className={style.action}
                onClick={() => navigate("/teams")}
              >
                <GroupsIcon fontSize="large" />
              </IconButton>
              <IconButton
                className={style.action}
                onClick={() => navigate("/home")}
              >
                <HomeIcon fontSize="large" />
              </IconButton>
              <IconButton
                className={style.action}
                onClick={() => navigate("/bets")}
              >
                <Badge badgeContent={betOpenQty} color="secondary">
                  <SportsFootballIcon fontSize="large" />
                </Badge>
              </IconButton>
            </ButtonGroup>
          </AppBar>
        </Hidden>
      )}
    </Box>
  );
}
