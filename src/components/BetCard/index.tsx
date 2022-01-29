import {
  Button,
  ButtonGroup,
  CardActions,
  Typography,
  Box,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles } from "@mui/styles";
import { format } from "date-fns";
import { ISchedule } from "../../types/schedule";

import style from "./styles.module.scss";

interface Props {
  schedule: ISchedule;
}

const BetCard = ({ schedule }: Props) => {
  return (
    <Card className={style.root} elevation={2}>
      <Box className={style.cardHeader}>
        <Typography fontWeight="bold" variant="caption" className={style.date}>
          {format(schedule.matchDate, "EEE dd/MM").toUpperCase()}
        </Typography>
        <Typography
          variant="caption"
          fontWeight="bold"
          // className={style.matchStatus}
        >
          {schedule.matchStatus}
        </Typography>
      </Box>

      <CardContent className={style.cardContent}>
        <Box className={style.teams}>
          <CardMedia
            component="img"
            image={schedule.competitors.homeTeam.logo}
            alt="Live from space album cover"
            className={style.cardMedia}
          />
          <Typography margin={0} variant="h6">
            {schedule.competitors.homeTeam.name}
          </Typography>
          <Typography margin={0} variant="caption">
            {schedule.competitors.homeTeam.stats}
          </Typography>
        </Box>
        <Typography margin={0} variant="h6" textAlign={"center"}>
          VS
        </Typography>
        <Box className={style.teams}>
          <CardMedia
            component="img"
            image={schedule.competitors.awayTeam.logo}
            alt="Live from space album cover"
            className={style.cardMedia}
          />
          <Typography margin={0} variant="h6">
            {schedule.competitors.awayTeam.name}
          </Typography>
          <Typography margin={0} variant="caption">
            {schedule.competitors.awayTeam.stats}
          </Typography>
        </Box>
      </CardContent>
      <CardActions className={style.buttonGroup}>
        <ButtonGroup variant="contained" color="secondary" disableElevation>
          <Button>{schedule.competitors.homeTeam.abbreviation}</Button>
          <Button>DAW</Button>
          <Button>{schedule.competitors.awayTeam.abbreviation}</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};
export default BetCard;
