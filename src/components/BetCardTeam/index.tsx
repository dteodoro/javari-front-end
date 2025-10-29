import { Box, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ITeam } from "../../types/team";
import style from "./styles.module.scss";

interface Props {
  team: ITeam | undefined;
  homeAway?: string;
}

const BetCardTeam = ({ team, homeAway }: Props) => {
  const navigate = useNavigate();
  function handleTeamClick() {
    navigate(`/teams/${team?.id}`);
  }
  return (
    <>
      <Box className={style.teams} onClick={handleTeamClick}>
        <div className={(homeAway === "home" ? style.teamGroupHome : style.teamGroupAway) + " "+ (team?.conference === "AFC" ? style.teamGroupAFC : style.teamGroupNFC)}>
          <span>{team?.conference}</span><br/>
          <span>{team?.division}</span>
        </div>
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
