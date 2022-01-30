import { Box, CardMedia, Typography } from "@mui/material";
import Card from "@mui/material/Card/Card";
import { useState } from "react";
import { MatchResult } from "../../types/match-result-enum";
import { ISchedule } from "../../types/schedule";
import { ITeam } from "../../types/team";
import style from "./styles.module.scss";

interface Props {
  team: ITeam;
  winner?: boolean;
}

const MatchupCard = ({ team, winner }: Props) => {
  return (
    <Card>
      <Box className={style.cardContainer}>
        <CardMedia
          component="img"
          image={team.logo}
          alt={team.name}
          className={style.cardMedia}
        />
        <Box className={`${style.cardItem} ${style.itemName}`}>
          <Typography className={style.teamName} variant="subtitle2">
            {team.name.toUpperCase()}
          </Typography>
          <Typography className={style.teamStats} variant="body2">
            {team.stats}
          </Typography>
        </Box>
        <Box className={`${style.cardItem} ${style.itemStats}`}>
          <Typography
            className={style.matchResult}
            variant="subtitle2"
            component="p"
          >
            {winner ? "W" : "L"}
          </Typography>
          <Typography
            className={style.matchStats}
            variant="h6"
            component="h6"
            marginLeft={"8px"}
          >
            30 - 27
          </Typography>
        </Box>
        <div
          className={
            winner
              ? style.matchResultBannerWinner
              : style.matchResultBannerLoser
          }
        ></div>
      </Box>
    </Card>
  );
};

export default MatchupCard;
