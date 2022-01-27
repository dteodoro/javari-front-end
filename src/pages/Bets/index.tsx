import { Box, Container, MenuItem, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import BetCardContainer from "../../containers/BetCardContainer";

const bets = [1, 2, 3, 4, 5, 6, 7];

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

const useStyles = makeStyles({
  filterBar: {
    width: "100%",
    margin: "10px auto",
    display: "block",
    marginBottom: "16px",
    borderBottom: "solid 1px #f6f6f6",
  },
  filterBarTitle: {
    padding: "8px 8px",
    paddingBottom: "16px",
    margin: "16px 0",
  },
  selectsGroup: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  selectItem: {
    marginBottom: "8px",
    marginRight: "8px",
    width: "30%",
    maxWidth: "200px",
  },
  lastSelect: {
    marginRight: "auto",
    flexGrow: "2",
    maxWidth: "350px",
  },
});

const Bets = () => {
  const classes = useStyles();
  const [year, setYear] = useState("");
  const [week, setWeek] = useState("");

  const handleChangeWeek = (event: SelectChangeEvent) =>
    setWeek(event.target.value as string);

  const handleChangeYear = (event: SelectChangeEvent) =>
    setYear(event.target.value as string);
  return (
    <Container>
      <Box className={classes.filterBar}>
        <Typography
          fontWeight="bold"
          variant="subtitle1"
          // className={classes.filterBarTitle}
        >
          NFL SCHEDULE
        </Typography>
        <Typography
          fontWeight="bold"
          variant="subtitle2"
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
      <BetCardContainer />;
    </Container>
  );
};

export default Bets;
