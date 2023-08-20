import { Box, Container, MenuItem, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";

import BetCardContainer from "../../containers/BetCardContainer";
import BetCardSkeletonContainer from "../../containers/BetCardContainer/BetCardSkeletonContainer";
import api from "../../services/api";
import { useAuth } from "../../store/contexts/Auth/AuthContext";
import { ISchedule, ISeasonFilter, IWeek } from "../../types/schedule";
import style from "./styles.module.scss";
import { API_CORE } from "../../types/constants";
import NoContent from "../../components/NoContent";

const Bets = () => {
  const year = "2023";
  const [seasons, setSeasons] = useState<ISeasonFilter[]>([]);
  const [week, setWeek] = useState<IWeek[] | undefined>([]);
  const [selectedSeason, setSelectedSeason] = useState<string>("");
  const [selectedWeek, setSelectedWeek] = useState<string>("");
  const [data, setData] = useState<ISchedule[]>([]);
  const [loading, setLoading] = useState(true);

  const { bettor } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      const response = await api.get(
        `${API_CORE}/schedules?bettor=${bettor?.userId}&season=${selectedSeason}&week=${selectedWeek}`
      );
      setData(response.data);
      setLoading(false);
    };
    fetchData();
  }, [selectedSeason, selectedWeek, bettor]);

  useEffect(() => {
    const fetchData = async () => {
      const responseMenu = await api.get(`${API_CORE}/seasons/filters`);
      setSeasons(responseMenu.data);
    };
    fetchData();
  }, []);

  const handleChangeSeason = (event: SelectChangeEvent) => {
    let selected = event.target.value as string;
    let season = seasons.find((s) => s.seasonId === selected);
    setSelectedSeason(selected);
    setSelectedWeek("");
    setWeek(season?.weeks);
  };

  const handleChangeWeek = (event: SelectChangeEvent) =>
    setSelectedWeek(event.target.value as string);

  return (
    <Container>
      <Box className={style.filterBar}>
        <Typography fontWeight="bold" variant="subtitle1" mb={2}>
          NFL SCHEDULES - {year}
        </Typography>
        <Box className={style.selectsGroup}>
          <Select
            className={`${style.selectItem} ${style.firstSelect}`}
            onChange={handleChangeSeason}
            value={selectedSeason}
          >
            {seasons.map((s) => (
              <MenuItem key={s.seasonId} value={s.seasonId}>
                {s.seasonLabel}
              </MenuItem>
            ))}
          </Select>
          <Select
            className={`${style.selectItem} ${style.lastSelect}`}
            onChange={handleChangeWeek}
            value={selectedWeek}
          >
            {week?.map((w) => (
              <MenuItem key={w.weekId} value={w.weekId}>
                {w.weekLabel}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
      {data.length < 1 ? <NoContent label="No Results" /> : ""}
      {loading ? (
        <BetCardSkeletonContainer />
      ) : (
        <BetCardContainer data={data} />
      )}
    </Container>
  );
};

export default Bets;
