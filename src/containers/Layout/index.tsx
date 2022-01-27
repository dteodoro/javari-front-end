import {
  AppBar,
  Button,
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
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { navItem } from "../../routes";

const drawerWidth = 240;

const useStyles = makeStyles((open) => {
  return {
    root: {
      // backgroundColor: "#f9f9f9",
      width: "100%",
      margin: "0 auto",
    },
    page: {
      display: "flex",
      margin: "0 auto",
      width: "100%",
    },
    drawer: {
      width: drawerWidth,
      display: "flex",
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      backgroundColor: "lightblue",
      padding: "8px 8px",
      height: "64px",
    },
    appBar: {
      zIndex: 999,
    },
  };
});

export default function Layout({ children }: any) {
  const [open, setOpen] = useState(false);
  const classes = useStyles(open);
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
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
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <List>
          {navItem.map((item) => (
            <ListItem
              key={item.name}
              button
              onClick={() => {
                setOpen(false);
                navigate(item.path);
              }}
            >
              <ListItemIcon>{<item.icon />}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>{children}</div>
    </div>
  );
}
