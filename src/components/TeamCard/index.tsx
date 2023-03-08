import { Box, Card, CardMedia, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom";

import { ITeam } from "../../types/team";
import style from "./styles.module.scss";
interface Props {
  team: ITeam | undefined;
}

const TeamCard = ({ team }: Props) => {
  let navigate = useNavigate();
  return (
    <Card
      className={style.root}
      onClick={() => {
        navigate(`/teams/${team?.id}`);
      }}
    >
      <Box className={style.container}>
        <Box className={style.cardContent}>
          <CardMedia
            component="img"
            image={team?.logo}
            alt={team?.displayName}
            className={style.cardMedia}
          />
          <Box>
            <Typography margin={0} variant="caption">
              {team?.shortDisplayName}
            </Typography>
            <Typography margin={0} variant="h6">
              {team?.name}
            </Typography>
          </Box>
          <Box className={style.stats}>
            {true && <Typography variant="caption">{"0-0-0"}</Typography>}
            {true &&
              (false ? (
                <StarIcon sx={{ marginLeft: "8px" }} />
              ) : (
                <StarBorderIcon
                  sx={{ marginLeft: "16px", marginRight: "8px" }}
                />
              ))}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default TeamCard;
