import { Box, Container, MenuItem, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";

import BetCardContainer from "../../containers/BetCardContainer";
import BetCardSkeletonContainer from "../../containers/BetCardContainer/BetCardSkeletonContainer";
import api from "../../services/api";
import { ISchedule, ISeasonFilter, IWeek } from "../../types/schedule";
import style from "./styles.module.scss";
import { API_CORE } from "../../types/constants";
import NoContent from "../../components/NoContent";
import { useBettorContext } from "../../store/contexts/Auth/BettorContext";

const Bets = () => {
  const year = "2023";
  const [seasons, setSeasons] = useState<ISeasonFilter[]>([]);
  const [week, setWeek] = useState<IWeek[] | undefined>([]);
  const [selectedSeason, setSelectedSeason] = useState<string>(() => {
    let lsSeason = localStorage.getItem("seasonFilter");
    return lsSeason ? (lsSeason as string) : "";
  });
  const [selectedWeek, setSelectedWeek] = useState<string>(() => {
    let lsWeek = localStorage.getItem("weekFilter");
    return lsWeek ? (lsWeek as string) : "";
  });
  const [data, setData] = useState<ISchedule[]>([]);
  const [loading, setLoading] = useState(true);

  const { bettor } = useBettorContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      const seasonFilter = selectedSeason ? `&season=${selectedSeason}` : "";
      const weekFilter = selectedWeek ? `&week=${selectedWeek}` : "";
      const response = await api.get(
        `${API_CORE}/schedules?bettor=${bettor?.userId}${seasonFilter}${weekFilter}`
      );
      setData(response.data);
      localStorage.setItem("seasonFilter", selectedSeason);
      localStorage.setItem("weekFilter", selectedWeek);
      setLoading(false);
    };
    fetchData();
  }, [selectedSeason, selectedWeek, bettor]);

  useEffect(() => {
    const fetchData = async () => {
      const responseMenu = await api.get(`${API_CORE}/seasons/filters`);
      let seasons: ISeasonFilter[] = responseMenu.data;
      setSeasons(seasons);
      setSelectedSeason(selectedSeason);
      let season = seasons.find((s) => s.seasonId === selectedSeason);
      setWeek(season?.weeks);
      setSelectedWeek(selectedWeek);
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
            <MenuItem key={"season-empty"} value={""}></MenuItem>
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
            <MenuItem key={"week-empty"} value={""}></MenuItem>
            {week?.map((w) => (
              <MenuItem key={w.weekId} value={w.weekId}>
                {w.weekLabel}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
      {data.length < 1 && !loading ? <NoContent label="No Results" /> : ""}
      {loading ? (
        <BetCardSkeletonContainer />
      ) : (
        <BetCardContainer data={data} />
      )}
    </Container>
  );
};

export default Bets;
