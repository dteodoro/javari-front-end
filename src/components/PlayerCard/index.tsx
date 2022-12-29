import { Avatar, Box, Card, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import style from "./styles.module.scss";
import { IPlayer } from "../../types/player";
import RankStatus from "../RankStatus";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/contexts/Auth/AuthContext";

interface Props {
  player: IPlayer;
}

const PlayerCard = ({ player }: Props) => {
  const { user: currentPlayer } = useAuth();
  let navigate = useNavigate();

  const cardClickHandle = () => {
    navigate(`/bettor/${player.slug}`);
  };

  return (
    <Card
      className={style.playerCard_root}
      onClick={currentPlayer?.id !== player.id ? cardClickHandle : () => {}}
    >
      <Box className={style.playerCard_playerContainer}>
        <Box className={style.playerCard_avatar}>
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </Box>
        <Box className={style.playerCard_playerName}>
          <Typography variant="h6">{player.name}</Typography>
          <Box className={style.playerCard_position}>
            <Typography variant="caption">{player.position}th</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={style.playerCard__points}>
        <RankStatus rankStatus={player.rankStatus} />
        <Typography variant="h4">{player.points}</Typography>
        <Typography ml={1} variant="body2">
          Pts
        </Typography>
      </Box>
    </Card>
  );
};

export default PlayerCard;
