import {
  Box,
  Container,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import BetCard from "..";
import { ISchedule } from "../../../types/schedule";

const bets = [1, 2, 3, 4, 5, 6, 7];

const useStyles = makeStyles({
  root: {
    backgroundColor: "#f6f6f6",
    margin: "0 auto",
  },
  filterBar: {
    width: "100%",
    height: "8%",
    backgroundColor: "#f9f9f9",
    margin: "0 auto",
    display: "block",
    marginBottom: "16px",
    borderBottom: "solid 1px #e4e0e0",
  },
  filterBarTitle: {
    padding: "8px 8px",
    margin: "16px 0",
  },
  selectsGroup: {
    display: "flex",
  },
  selectItem: {
    marginBottom: "16px",
    width: "50%",
  },
  lastSelect: {
    marginLeft: "16px",
  },
});

const years = ["2020", "2021", "2022"];
const weeks = [
  "Week 1",
  "Week 2",
  "Week 3",
  "Week 4",
  "Week 5",
  "Week 6",
  "Week 7",
  "Week 8",
  "Week 8",
];

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
      <Box className={classes.filterBar}>
        <Typography
          fontWeight="bold"
          variant="h5"
          className={classes.filterBarTitle}
        >
          2021 — WEEK 18
        </Typography>
        <Box className={classes.selectsGroup}>
          <Select className={classes.selectItem}>
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
          <Select className={`${classes.selectItem} ${classes.lastSelect}`}>
            {weeks.map((week) => (
              <MenuItem key={week} value={week}>
                {week}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {bets.map((bet) => (
          <Grid key={bet} item xs={12} sm={6} md={6} lg={4} xl={4}>
            <BetCard schedule={schedule} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default BetCardContainer;
