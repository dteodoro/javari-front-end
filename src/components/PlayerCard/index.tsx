import { Avatar, Box, Card, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import style from "./styles.module.scss";
import { RANK_STATUS } from "../../types/constants";
import { IPlayer } from "../../types/player";
import RankStatus from "../RankStatus";

interface Props {
  player: IPlayer;
}

const PlayerCard = ({ player }: Props) => {
  return (
    <Card className={style.playerCard_root}>
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
