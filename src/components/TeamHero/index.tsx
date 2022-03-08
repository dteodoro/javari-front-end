import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactNode } from "react";

import style from "./styles.module.scss";

const heroContent2 = {
  mainTitle: "Los Angeles Rams",
  secondaryTitle: "1st NFC South",
  description: "13-4-0",
  mainImage: "/SVG-rams-logo.svg",
  backgroundImage: "/SVG-rams-logo.svg",
};

interface Props {
  children?: ReactNode;
  mainImage?: string;
  backgroundImage?: string;
}

const TeamHero = (heroContent: Props) => {
  return (
    <Card elevation={2} className={style.root}>
      <Box className={style.teamInfo}>
        <CardContent>{heroContent.children}</CardContent>
        <Box className={style.logoContainer}>
          <CardMedia
            component="img"
            image={heroContent.mainImage}
            alt="Live from space album cover"
            className={style.teamLogo}
          />
        </Box>
      </Box>
      <Box>
        <img
          src={heroContent.backgroundImage}
          className={style.backgroundLogo}
        ></img>
      </Box>
    </Card>
  );
};

export default TeamHero;
