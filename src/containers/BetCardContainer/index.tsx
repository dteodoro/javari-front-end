import { Box, Container, Grid, MenuItem, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

import BetCard from "../../components/BetCard";
import { ISchedule } from "../../types/schedule";
import style from ".styles.module.scss";

const bets = [1, 2, 3, 4, 5, 6, 7];

const schedule: ISchedule = {
  id: 1,
  matchDate: new Date(),
  matchStatus: "NOT STARTED",
  competitors: {
    homeTeam: {
      id: 1,
      logo: "/nfl.svg",
      name: "Raiders",
      nickName: "Las Vegas",
      displayName: "Las Vegas Raiders",
      abbreviation: "LV",
      stats: "(2-3-1)",
    },
    awayTeam: {
      id: 1,
      logo: "/nfl.svg",
      name: "Rams",
      nickName: "Los Angeles",
      displayName: "Los Angeles Rams",
      abbreviation: "LAR",
      stats: "(5-1)",
    },
  },
};

const BetCardContainer = () => {
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
