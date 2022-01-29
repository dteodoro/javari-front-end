import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  checkboxClasses,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { ITeam } from "../../types/team";
import style from "./styles.module.scss";
interface Props {
  team: ITeam;
}

const TeamCard = ({ team }: Props) => {
  console.log(team);
  return (
    <Card>
      <div className={style.root}>
        <Box className={style.cardContent}>
          <CardMedia
            component="img"
            image={team.logo}
            alt={team.shortName}
            className={style.cardMedia}
          />
          <Box>
            <Typography margin={0} variant="caption">
              {team.fullName}
            </Typography>
            <Typography margin={0} variant="h6">
              {team.mediumName}
            </Typography>
          </Box>
          <Box className={style.stats}>
            <Typography margin={0} variant="caption">
              {team.stats}
            </Typography>
          </Box>
        </Box>
      </div>
    </Card>
  );
};

export default TeamCard;
