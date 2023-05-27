import { Box, CardMedia, Typography } from "@mui/material";
import Card from "@mui/material/Card/Card";

import { ITeam } from "../../types/team";
import style from "./styles.module.scss";
import { ISchedule } from "../../types/schedule";
import { ICompetitor } from "../../types/competitors";

interface Props {
  competitors: ICompetitor[];
  team?: ITeam;
}

const MatchupCard = ({ competitors, team }: Props) => {
  var homeCompetitor = competitors.find((c) => c.team.id === team?.id);
  var awayCompetitor = competitors.find((c) => c.team.id !== team?.id);
  return (
    <Card>
      <Box className={style.cardContainer}>
        <CardMedia
          component="img"
          image={awayCompetitor?.team?.logo}
          alt={awayCompetitor?.team?.name}
          className={style.cardMedia}
        />
        <Box className={`${style.cardItem} ${style.itemName}`}>
          <Typography className={style.teamName} variant="subtitle2">
            {awayCompetitor?.team?.name.toUpperCase()}
          </Typography>
          <Typography className={style.teamStats} variant="body2">
            {awayCompetitor?.team?.scoreScoreSummary}
          </Typography>
        </Box>
        <Box className={`${style.cardItem} ${style.itemStats}`}>
          <Typography
            className={style.matchResult}
            variant="subtitle2"
            component="p"
          >
            {homeCompetitor?.winner ? "W" : "L"}
          </Typography>
          <Typography
            className={style.matchStats}
            variant="h6"
            component="h6"
            marginLeft={"8px"}
          >
            {homeCompetitor?.score + " - " + awayCompetitor?.score}
          </Typography>
        </Box>
        <div
          className={
            homeCompetitor?.winner
              ? style.matchResultBannerWinner
              : style.matchResultBannerLoser
          }
        ></div>
      </Box>
    </Card>
  );
};

export default MatchupCard;
