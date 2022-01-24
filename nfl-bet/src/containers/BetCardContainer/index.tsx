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
  },
  filterBar: {
    width: "100%",
    height: "10%",
    backgroundColor: "#4a58a5",
    margin: "10px auto",
    display: "block",
    marginBottom: "16px",
    borderBottom: "solid 1px #e4e0e0",
  },
  filterBarTitle: {
    padding: "8px 8px",
    paddingBottom: "16px",
    margin: "16px 0",
  },
  selectsGroup: {
    display: "flex",
  },
  selectItem: {
    marginLeft: "8px",
    marginBottom: "8px",
    width: "30%",
  },
  lastSelect: {
    marginRight: "8px",
    flexGrow: "2",
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
  "CONFERENCE CHAMPIONSHIP",
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
  const [year, setYear] = useState("");
  const [week, setWeek] = useState("");

  const handleChangeWeek = (event: SelectChangeEvent) =>
    setWeek(event.target.value as string);

  const handleChangeYear = (event: SelectChangeEvent) =>
    setYear(event.target.value as string);

  return (
    <Container className={classes.root}>
      <Box className={classes.filterBar}>
        <Typography
          fontWeight="bold"
          variant="h6"
          className={classes.filterBarTitle}
        >
          NFL SCHEDULE
        </Typography>
        <Typography
          fontWeight="bold"
          variant="h6"
          className={classes.filterBarTitle}
        >
          {year && week && `${year} - ${week}`}
        </Typography>
        <Box className={classes.selectsGroup}>
          <Select
            className={classes.selectItem}
            onChange={handleChangeYear}
            value={year}
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
          <Select
            className={`${classes.selectItem} ${classes.lastSelect}`}
            onChange={handleChangeWeek}
            value={week}
          >
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
