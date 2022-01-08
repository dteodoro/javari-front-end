import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import BetCard from "..";
import { ISchedule } from "../../../types/schedule";

const bets = [1, 2, 3, 4];

const useStyles = makeStyles({
  root: {
    backgroundColor: "#f6f6f6",
  },
});

const schedule: ISchedule = {
  matchDate: new Date(),
  matchStatus: "NOT STARTED",
  competitors: {
    homeTeam: {
      id: 1,
      logo: "/nfl.svg",
      fullName: "Home Team",
      mediumName: "Team 1",
      shortName: "TM1",
      stats: "(2-3-1)",
    },
    awayTeam: {
      id: 1,
      logo: "/nfl.svg",
      fullName: "Away Team",
      mediumName: "Team 2",
      shortName: "TM2",
      stats: "(5-1)",
    },
  },
};

const BetCardContainer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        {bets.map((bet) => (
          <Grid key={bet} item xs={12} sm={6} md={5} lg={5} xl={5}>
            <BetCard schedule={schedule} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default BetCardContainer;
