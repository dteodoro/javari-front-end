import {
  AppBar,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import style from "./styles.module.scss";
import { navItem } from "../../routes";
interface Props {
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={style.root}>
      <AppBar position="sticky" className={style.appBar}>
        <Toolbar>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NFL
          </Typography>
          <Button color="inherit">Login</Button>
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
              <ListItemText className={style.menuItems} primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={style.page}>{children}</div>
    </div>
  );
}
