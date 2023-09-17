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
  const { bettor: currentPlayer } = useAuth();
  let navigate = useNavigate();

  const isCurrentPlayer = currentPlayer?.userId === player.bettorId;

  const cardClickHandle = () => {
    navigate(`/bettor/${player.bettorId}`);
  };

  return (
    <Card
      className={`${style.playerCard_root} ${
        isCurrentPlayer ? style.playerCard_currentPlayer : ""
      }`}
      onClick={isCurrentPlayer ? () => {} : cardClickHandle}
    >
      <Box className={style.playerCard_playerContainer}>
        <Box className={style.playerCard_avatar}>
          <Avatar alt={player.nickName} src={player.image}>
            <AccountCircleIcon />
          </Avatar>
        </Box>
        <Box className={style.playerCard_playerName}>
          <Typography variant="h6">{player.nickName}</Typography>
          <Box className={style.playerCard_position}>
            <Typography variant="caption">
              {player.currentPosition}th
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={style.playerCard__points}>
        <RankStatus rank={player.currentPosition - player.previousPosition} />
        <Typography variant="h4">{player.score?.points}</Typography>
        <Typography variant="body2" ml={0.5}>
          Pts
        </Typography>
      </Box>
    </Card>
  );
};

export default PlayerCard;
