import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom";

import { ITeam } from "../../types/team";
import style from "./styles.module.scss";
import { useEffect } from "react";
import BettorService from "../../services/BettorService";
import { useBettorContext } from "../../store/contexts/Auth/BettorContext";

interface Props {
  team?: ITeam;
  editable: boolean;
}

const TeamCard = ({ team, editable }: Props) => {
  const { bettor, favoriteTeam, setFavoriteTeam } = useBettorContext();
  let navigate = useNavigate();

  const cardClickHandle = () => {
    navigate(`/teams/${team?.id}`);
  };

  const favoriteHandleClick = async () => {
    const service = new BettorService();
    if (team?.id !== favoriteTeam?.id) {
      await service
        .setFavoriteTeam(team?.id, bettor?.userId)
        .then((resp) => setFavoriteTeam(resp));
    } else {
      service.removeFavoriteTeam(team?.id, bettor?.userId);
      setFavoriteTeam({} as ITeam);
    }
  };

  useEffect(() => {}, [favoriteTeam]);

  return (
    <Card className={style.root}>
      <Box className={style.container}>
        <Box className={style.cardContent}>
          <CardMedia
            component="img"
            image={team?.logo}
            alt={team?.displayName}
            className={style.cardMedia}
            onClick={cardClickHandle}
          />
          <Box onClick={cardClickHandle}>
            <Typography margin={0} variant="caption">
              {team?.displayName}
            </Typography>
            <Typography margin={0} variant="h6">
              {team?.name}
            </Typography>
          </Box>
          <Box className={style.stats}>
            <Typography
              onClick={() => {
                navigate(`/teams/${team?.id}`);
              }}
              variant="caption"
            >
              {team?.scoreScoreSummary}
            </Typography>

            {favoriteTeam?.id === team?.id ? (
              <IconButton
                className={style.backButton}
                onClick={editable ? favoriteHandleClick : () => {}}
              >
                <StarIcon sx={{ marginLeft: "16px", marginRight: "4px" }} />
              </IconButton>
            ) : (
              <IconButton
                className={style.backButton}
                onClick={editable ? favoriteHandleClick : () => {}}
              >
                <StarBorderIcon
                  sx={{ marginLeft: "16px", marginRight: "4px" }}
                />
              </IconButton>
            )}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default TeamCard;
