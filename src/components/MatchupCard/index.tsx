import { Box, CardMedia, Typography } from "@mui/material";
import Card from "@mui/material/Card/Card";
import { ISchedule } from "../../types/schedule";
import { ITeam } from "../../types/team";
import style from "./styles.module.scss";

interface Props {
  team: ITeam;
}

const MatchupCard = ({ team }: Props) => {
  return (
    <Card>
      <div className={style.root}>
        <Box className={style.cardContent}>
          <CardMedia
            component="img"
            image={team.logo}
            alt={team.name}
            className={style.cardMedia}
          />
          <Box>
            <Typography margin={0} variant="caption">
              {team.nickName}
            </Typography>
            <Typography margin={0} variant="h6">
              {team.name}
            </Typography>
          </Box>
          <Box>
            <Typography margin={0} variant="caption">
              {team.stats}
            </Typography>
          </Box>
        </Box>
      </div>
    </Card>
  );
};

export default MatchupCard;
