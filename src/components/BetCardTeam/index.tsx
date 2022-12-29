import { Box, CardMedia, Typography } from "@mui/material";
import { ITeam } from "../../types/team";
import style from "./styles.module.scss";

interface Props {
  team: ITeam | undefined;
}

const BetCardTeam = ({ team }: Props) => {
  return (
    <>
      <Box className={style.teams}>
        <CardMedia
          component="img"
          image={team?.logo}
          alt={team?.abbreviation}
          className={style.cardMedia}
        />
        <Typography margin={0} variant="h6">
          {team?.name}
        </Typography>
        <Typography margin={0} variant="caption">
          {team?.scoreSummary}
        </Typography>
      </Box>
    </>
  );
};

export default BetCardTeam;
