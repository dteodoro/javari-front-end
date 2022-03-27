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
import { ISmallCard } from "../../types/mini-card";

import { ISchedule } from "../../types/schedule";
import { ITeam } from "../../types/team";
import style from "./styles.module.scss";

interface Props {
  team: ITeam;
  winner?: boolean;
}

const BetResultCard = ({ team, winner }: Props) => {
  return (
    <Card>
      <Box className={style.cardContainer}>
        <CardMedia
          component="img"
          image={team.logo}
          alt={team.name}
          className={style.cardMedia}
        />
        <Typography className={style.teamName} variant="subtitle2">
          {team.abbreviation}
        </Typography>
        <Typography
          ml={1}
          mr={1}
          className={style.teamName}
          variant="subtitle2"
        >
          @
        </Typography>
        <Typography className={style.teamName} variant="subtitle2">
          {team.abbreviation}
        </Typography>
        <CardMedia
          component="img"
          image={team.logo}
          alt={team.name}
          className={style.cardMedia}
        />
        <Box
          className={`${style.cardItem} ${style.itemStats} ${style.matchPoints}`}
        >
          <Typography className={style.matchResult} variant="h6" component="p">
            {winner ? "+5" : "-"}
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
export default BetResultCard;
