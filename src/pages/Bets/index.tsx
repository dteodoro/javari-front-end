import { Box, Container, MenuItem, Skeleton, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";

import BetCardContainer from "../../containers/BetCardContainer";
import BetCardSkeletonContainer from "../../containers/BetCardContainer/BetCardSkeletonContainer";
import api from "../../services/api";
import { useAuth } from "../../store/contexts/Auth/AuthContext";
import { ISchedule } from "../../types/schedule";
import style from "./styles.module.scss";

const Bets = () => {
  const [year, setYear] = useState("2022");
  const [week, setWeek] = useState("REGULAR_SESSION");
  const [data, setData] = useState<ISchedule[] | undefined>(undefined);
  const [menuYear, setMenuYear] = useState<string[]>([]);
  const [menuSeason, setMenuSeason] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const { bettor } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(
        `/schedules/session/${year}/${week}/bettor/${bettor?.userId}`
      );
      setData(response.data);
      setLoading(false);
      const responseMenu = await api.get(`/schedules/filters`);
      setMenuYear(responseMenu.data.years);
      setMenuSeason(responseMenu.data.seasons);
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
            {menuYear.map((year) => (
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
            {menuSeason.map((season) => (
              <MenuItem key={season} value={season}>
                {season}
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
