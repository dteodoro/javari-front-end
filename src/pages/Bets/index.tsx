import { Box, Container, MenuItem, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { useState } from "react";
import BetCardContainer from "../../containers/BetCardContainer";
import style from "./styles.module.scss";

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

const Bets = () => {
  const [year, setYear] = useState("");
  const [week, setWeek] = useState("");

  const handleChangeWeek = (event: SelectChangeEvent) =>
    setWeek(event.target.value as string);

  const handleChangeYear = (event: SelectChangeEvent) =>
    setYear(event.target.value as string);
  return (
    <Container>
      <Box className={style.filterBar}>
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
          className={style.filterBarTitle}
        >
          {year && week && `${year} - ${week}`}
        </Typography>
        <Box className={style.selectsGroup}>
          <Select
            className={style.selectItem}
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
            className={`${style.selectItem} ${style.lastSelect}`}
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
      <BetCardContainer />
    </Container>
  );
};

export default Bets;
