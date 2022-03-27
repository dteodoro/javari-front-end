import {
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

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
  editable?: boolean;
}

const TeamHero = (props: Props) => {
  return (
    <Card elevation={2} className={style.root}>
      <Box className={style.teamInfo}>
        <CardContent>{props.children}</CardContent>
        {props.mainImage && (
          <Box className={style.logoContainer}>
            <CardMedia
              component="img"
              image={props.mainImage}
              alt="Live from space album cover"
              className={style.teamLogo}
            />
            {props.editable && (
              <IconButton className={style.editButton}>
                <EditIcon />
              </IconButton>
            )}
          </Box>
        )}
      </Box>
      <Box>
        <img src={props.backgroundImage} className={style.backgroundLogo}></img>
      </Box>
    </Card>
  );
};

export default TeamHero;
