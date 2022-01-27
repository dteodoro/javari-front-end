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

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateRows: "5% 85% 10%",
  },
  cardMedia: {
    maxWidth: "70px",
    maxHeight: "70px",
    margin: "auto",
  },
  cardContent: {
    display: "grid",
    gridTemplateColumns: "40% 20% 40%",
    alignItems: "center",
  },
  cardHeader: {
    display: "flex",
    margin: "0 4px",
  },
  date: {
    flexGrow: 1,
  },
  teams: {
    display: "grid",
    margin: "auto",
    textAlign: "center",
  },
  buttonGroup: {
    justifyContent: "center",
  },
  // matchStatus: {
  //   backgroundColor: "green",
  //   borderRadius: "0 0 0 5px",
  //   color: "white",
  //   padding: "1px 2px 0 2px",
  // },
});

const BetCard = ({ schedule }: { schedule: ISchedule }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={2}>
      <Box className={classes.cardHeader}>
        <Typography
          fontWeight="bold"
          variant="caption"
          className={classes.date}
        >
          {format(schedule.matchDate, "EEE dd/MM").toUpperCase()}
        </Typography>
        <Typography
          variant="caption"
          fontWeight="bold"
          // className={classes.matchStatus}
        >
          {schedule.matchStatus}
        </Typography>
      </Box>

      <CardContent className={classes.cardContent}>
        <Box className={classes.teams}>
          <CardMedia
            component="img"
            image={schedule.competitors.homeTeam.logo}
            alt="Live from space album cover"
            className={classes.cardMedia}
          />
          <Typography margin={0} variant="h6">
            {schedule.competitors.homeTeam.mediumName}
          </Typography>
          <Typography margin={0} variant="caption">
            {schedule.competitors.homeTeam.stats}
          </Typography>
        </Box>
        <Typography margin={0} variant="h6" textAlign={"center"}>
          VS
        </Typography>
        <Box className={classes.teams}>
          <CardMedia
            component="img"
            image={schedule.competitors.awayTeam.logo}
            alt="Live from space album cover"
            className={classes.cardMedia}
          />
          <Typography margin={0} variant="h6">
            {schedule.competitors.awayTeam.mediumName}
          </Typography>
          <Typography margin={0} variant="caption">
            {schedule.competitors.awayTeam.stats}
          </Typography>
        </Box>
      </CardContent>
      <CardActions className={classes.buttonGroup}>
        <ButtonGroup variant="contained" color="secondary" disableElevation>
          <Button>{schedule.competitors.homeTeam.shortName}</Button>
          <Button>DAW</Button>
          <Button>{schedule.competitors.awayTeam.shortName}</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};
export default BetCard;
