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
// import { Container } from './styles';

const useStyle = makeStyles({
  root: {
    padding: "8px 16px 8px 4px",
    minWidth: "295px",
  },
  cardContent: {
    display: "flex",
    alignItems: "stretch",
    padding: "0",
  },
  cardMedia: {
    maxWidth: "70px",
    maxHeight: "70px",
  },
  stats: {
    alignSelf: "center",
    textAlign: "right",
    flexGrow: "3",
  },
});

interface Props {
  team: ITeam;
}

const TeamCard = ({ team }: Props) => {
  const classes = useStyle();
  console.log(team);
  return (
    <Card>
      <div className={classes.root}>
        <Box className={classes.cardContent}>
          <CardMedia
            component="img"
            image={team.logo}
            alt={team.shortName}
            className={classes.cardMedia}
          />
          <Box>
            <Typography margin={0} variant="caption">
              {team.fullName}
            </Typography>
            <Typography margin={0} variant="h6">
              {team.mediumName}
            </Typography>
          </Box>
          <Box className={classes.stats}>
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
