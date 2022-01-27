import { Box, Container, Grid, MenuItem, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

import BetCard from "../../components/BetCard";
import { ISchedule } from "../../types/schedule";

const bets = [1, 2, 3, 4, 5, 6, 7];

const useStyles = makeStyles({
  root: {
    backgroundColor: "#f6f6f6",
    margin: "0 auto",
    padding: "0",
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
    <Box p={0} m={0}>
      <Grid container spacing={2}>
        {bets.map((bet) => (
          <Grid key={bet} item xs={12} sm={6} md={6} lg={4} xl={4}>
            <BetCard schedule={schedule} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default BetCardContainer;
