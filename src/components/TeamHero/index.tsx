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

import style from "./styles.module.scss";

const TeamHero = () => {
  return (
    <Card elevation={2} className={style.root}>
      <Box className={style.teamInfo}>
        <CardContent>
          <Typography margin={0} variant="h6">
            Los Angeles Rams
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
          image="/SVG-rams-logo.svg"
          alt="Live from space album cover"
          className={style.teamLogo}
        />
      </Box>
      <Box className={style.logoContainer}>
        <img src="/SVG-rams-logo.svg" className={style.backgroundLogo}></img>
      </Box>
    </Card>
  );
};

export default TeamHero;
