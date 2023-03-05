import { Avatar, Box, Typography } from "@mui/material";
import { IPlayer } from "../../types/player";
import style from "./styles.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface Props {
  player: IPlayer;
}
const UserHero = ({ player }: Props) => {
  return (
    <Box className={style.root}>
      <Avatar variant="circular" className={style.avatar}>
        <AccountCircleIcon />
      </Avatar>
      <Typography variant="h6">{player.nickName}</Typography>
      <Typography variant="subtitle2">{player.currentPosition}Th</Typography>
    </Box>
  );
};

export default UserHero;
