import {
  Box,
  Container,
  Divider,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import DivisionContainer from "../../containers/DivisionContainer";
import api from "../../services/api";
import { IConference } from "../../types/conference";
import { API_CORE, CONFERENCES, DIVISIONS } from "../../types/constants";
import style from "./styles.module.scss";
import { useBettorContext } from "../../store/contexts/Auth/BettorContext";

const Teams = () => {
  const { favoriteTeam } = useBettorContext();

  const [conferences, setConferences] = useState<IConference[]>([]);
  const [conference, setConference] = useState<string>(() => {
    let lsConference = localStorage.getItem("conferenceFilter");
    return lsConference ? (lsConference as string) : "";
  });
  const [division, setDivision] = useState<string>(() => {
    let lsDivision = localStorage.getItem("divisionFilter");
    return lsDivision ? (lsDivision as string) : "";
  });

  useEffect(() => {
    async function fetchData() {
      const teamsResp = await api.get(
        `${API_CORE}/teams?conference=${conference}&division=${division}`
      );
      setConferences(teamsResp.data);
      localStorage.setItem("conferenceFilter", conference);
      localStorage.setItem("divisionFilter", division);
    }
    fetchData();
  }, [conference, division]);

  return (
    <Container className={style.root}>
      <Container className={style.filterBar}>
        <Box className={style.selectsGroup}>
          <Select
            className={style.selectItem}
            onChange={(e) => setConference(e.target.value)}
            value={conference}
          >
            <MenuItem key={"conf-empty"} value={""}></MenuItem>
            {CONFERENCES.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </Select>
          <Select
            className={`${style.selectItem} ${style.lastSelect}`}
            onChange={(e) => setDivision(e.target.value)}
            value={division}
          >
            <MenuItem key={"div-empty"} value={""}></MenuItem>
            {DIVISIONS.map((d) => (
              <MenuItem key={d} value={d}>
                {d}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Container>
      <Divider />
      {conferences.map((conf) => (
        <DivisionContainer
          key={conf.name}
          divisions={conf.divisions}
          conference={conf.name}
        />
      ))}
    </Container>
  );
};

export default Teams;
