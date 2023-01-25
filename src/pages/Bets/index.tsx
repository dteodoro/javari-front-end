import { Box, Container, MenuItem, Skeleton, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import { sleep } from "react-query/types/core/utils";

import BetCardContainer from "../../containers/BetCardContainer";
import BetCardSkeletonContainer from "../../containers/BetCardContainer/BetCardSkeletonContainer";
import api from "../../services/api";
import { ISchedule } from "../../types/schedule";
import style from "./styles.module.scss";

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
  "REGULAR_SESSION",
];

const Bets = () => {
  const [year, setYear] = useState("2022");
  const [week, setWeek] = useState("REGULAR_SESSION");
  const [data, setData] = useState<ISchedule[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`/schedules/session/${year}/${week}`);
      setData(response.data.content);
      setLoading(false);
    };
    fetchData();
  }, [year, week]);

  const handleChangeWeek = (event: SelectChangeEvent) =>
    setWeek(event.target.value as string);

  const handleChangeYear = (event: SelectChangeEvent) =>
    setYear(event.target.value as string);

  return (
    <Container>
      <Box className={style.filterBar}>
        <Typography fontWeight="bold" variant="subtitle1">
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
      {loading ? (
        <BetCardSkeletonContainer />
      ) : (
        <BetCardContainer data={data} />
      )}
    </Container>
  );
};

export default Bets;
