import { Box, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ITeam } from "../../types/team";
import style from "./styles.module.scss";

interface Props {
  team: ITeam | undefined;
}

const BetCardTeam = ({ team }: Props) => {
  const navigate = useNavigate();
  function handleTeamClick() {
    navigate(`/teams/${team?.id}`);
  }
  return (
    <>
      <Box className={style.teams} onClick={handleTeamClick}>
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
          {team?.scoreScoreSummary}
        </Typography>
      </Box>
    </>
  );
};

export default BetCardTeam;
