import {
  Button,
  ButtonGroup,
  CardActions,
  Typography,
  Box,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { ICompetitor } from "../../types/competitors";
import { MatchResult } from "../../types/match-result-enum";

import { ISchedule } from "../../types/schedule";
import { ITeam } from "../../types/team";
import style from "./styles.module.scss";

interface Props {
  schedule?: ISchedule;
}

const BetResultCard = ({ schedule }: Props) => {
  const homeTeam = schedule?.competitors.find(
    (c) => c.homeAway == "home"
  )?.team;
  const awayTeam = schedule?.competitors.find(
    (c) => c.homeAway == "away"
  )?.team;
  const winner = schedule?.bet?.win;

  function getTeam(teamType: MatchResult) {
    console.log("entrou aqui");
    if (teamType == MatchResult.HOME) {
      return homeTeam;
    } else {
      return awayTeam;
    }
  }

  return (
    <Card>
      <Box className={style.cardContainer}>
        {winner && (
          <Typography
            className={style.matchResult}
            variant="caption"
            component="span"
          >
            +{schedule?.bet?.score}
          </Typography>
        )}
        <Box className={style.matchContainer}>
          <Typography className={style.teamName} variant="subtitle2" ml={1}>
            {getTeam(MatchResult.AWAY)?.abbreviation}
          </Typography>
          <CardMedia
            component="img"
            image={getTeam(MatchResult.AWAY)?.logo}
            alt={getTeam(MatchResult.AWAY)?.name}
            className={`${style.cardMedia} `}
          />
          <Typography variant="h6" ml={2}>
            30
          </Typography>
          <Typography ml={2} mr={2} variant="subtitle2">
            @
          </Typography>
          <Typography variant="h6" mr={2}>
            27
          </Typography>
          <CardMedia
            component="img"
            image={getTeam(MatchResult.HOME)?.logo}
            alt={getTeam(MatchResult.HOME)?.name}
            className={style.cardMedia}
          />
          <Typography className={style.teamName} variant="subtitle2" mr={1}>
            {getTeam(MatchResult.HOME)?.abbreviation}
          </Typography>
        </Box>
        <Box
          className={`${style.cardItem} ${style.itemStats} ${style.matchPoints}`}
        ></Box>
        {winner != undefined && (
          <div
            className={
              winner
                ? style.matchResultBannerWinner
                : style.matchResultBannerLoser
            }
          ></div>
        )}
      </Box>
    </Card>
  );
};
export default BetResultCard;
