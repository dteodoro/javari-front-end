import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { createLanguageServiceSourceFile } from "typescript";

const useStyles = makeStyles({
  root: {
    backgroundColor: "transparent !important",
    position: "relative",
    width: "100%",
    padding: "16px 0 16px 0",
    background:
      "linear-gradient(110deg, transparent 61%, #181818 62% ,#d50a0a  63%)",
  },
  teamInfo: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    alignItems: "center",
  },
  teamLogo: {
    paddingLeft: "0",
    minWidth: "150px",
    maxWidth: "350px",
    minHeight: "150px",
    maxHeight: "350px",
  },
  backgroundLogo: {
    position: "absolute",
    backgroundImage: "url('nfl.svg')",
    backgroundSize: "cover",
    overflow: "hidden",
    width: "300%",
    height: "100%",
    opacity: "0.03",
    top: 0,
    left: "-100%",
    objectFit: "cover",
    zIndex: "-1",
  },
});

const TeamHero = () => {
  const classes = useStyles();
  return (
    <Card elevation={2} className={classes.root}>
      <Box className={classes.teamInfo}>
        <CardContent>
          <Typography margin={0} variant="h6">
            Tampa Bay Buccaneers
          </Typography>
          <Typography margin={0} variant="subtitle2">
            1st NFC South
          </Typography>
          <Typography margin={0} variant="caption">
            13-4-0
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          image="/nfl.svg"
          alt="Live from space album cover"
          className={classes.teamLogo}
        />
      </Box>
      <img src="/nfl.svg" className={classes.backgroundLogo}></img>
    </Card>
  );
};

export default TeamHero;
