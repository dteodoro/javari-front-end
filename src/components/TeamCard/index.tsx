import { Box, Card, CardMedia, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom";

import { ITeam } from "../../types/team";
import style from "./styles.module.scss";
interface Props {
  team: ITeam;
}

const TeamCard = ({ team }: Props) => {
  let navigate = useNavigate();
  return (
    <Card
      className={style.root}
      onClick={() => {
        navigate(`/team/${team.id}`);
      }}
    >
      <Box className={style.container}>
        <Box className={style.cardContent}>
          <CardMedia
            component="img"
            image={team.logo}
            alt={team.displayName}
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
          <Box className={style.stats}>
            {team.stats && (
              <Typography variant="caption">{team.stats}</Typography>
            )}
            {team.favorite != undefined &&
              (team.favorite ? (
                <StarIcon sx={{ marginLeft: "8px" }} />
              ) : (
                <StarBorderIcon sx={{ marginLeft: "8px" }} />
              ))}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default TeamCard;
