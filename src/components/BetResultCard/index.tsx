import { Typography, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { MatchResult } from "../../types/match-result-enum";

import { ISchedule } from "../../types/schedule";
import style from "./styles.module.scss";

interface Props {
  schedule?: ISchedule;
}

const BetResultCard = ({ schedule }: Props) => {
  const homeTeam = schedule?.competitors.find((c) => c.homeAway === "home");
  const awayTeam = schedule?.competitors.find((c) => c.homeAway === "away");
  const winner = schedule?.bet?.win;

  function getTeam(teamType: MatchResult) {
    console.log("entrou aqui");
    if (teamType === MatchResult.HOME) {
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
            +3{schedule?.bet?.score}
          </Typography>
        )}
        <Box className={style.matchContainer}>
          <Box className={style.teamContainer}>
            <Typography
              className={style.teamName}
              variant="subtitle2"
              ml={1}
              mb={1}
              mr={1}
            >
              {getTeam(MatchResult.AWAY)?.team.abbreviation}
            </Typography>
            <CardMedia
              component="img"
              image={getTeam(MatchResult.AWAY)?.team.logo}
              alt={getTeam(MatchResult.AWAY)?.team.name}
              className={`${style.cardMedia} `}
            />
            <Typography variant="h6" ml={1}>
              {getTeam(MatchResult.AWAY)?.score}
            </Typography>
          </Box>
          <Box>
            <Typography ml={0.5} mr={0.5} variant="subtitle2">
              @
            </Typography>
          </Box>
          <Box className={style.teamContainer}>
            <Typography variant="h6" mr={1}>
              {getTeam(MatchResult.HOME)?.score}
            </Typography>
            <CardMedia
              component="img"
              image={getTeam(MatchResult.HOME)?.team.logo}
              alt={getTeam(MatchResult.HOME)?.team.name}
              className={style.cardMedia}
            />
            <Typography
              className={style.teamName}
              variant="subtitle2"
              mr={1}
              mb={1}
              ml={1}
            >
              {getTeam(MatchResult.HOME)?.team.abbreviation}
            </Typography>
          </Box>
        </Box>
        {winner !== undefined && (
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
