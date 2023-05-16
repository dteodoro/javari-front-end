import { Box, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";

import style from "./styles.module.scss";
import api from "../../services/api";
import { API_CONNECTOR } from "../../types/constants";

const Settings: React.FC = () => {
  const [loadingSchedule, setLoadingSchedule] = React.useState(false);
  const [loadingTeam, setLoadingTeam] = React.useState(false);

  async function handleScheduleClick() {
    setLoadingSchedule(true);
    await api.get(`${API_CONNECTOR}/loader/schedules`);
    setLoadingSchedule(false);
  }
  async function handleTeamClick() {
    setLoadingTeam(true);
    await api.get(`${API_CONNECTOR}/loader/teams`);
    setLoadingTeam(false);
  }
  return (
    <Box>
      <Typography variant="h4">Configurações</Typography>

      <Box mr={2} mt={2} className={style.buttonContainer}>
        <Typography variant="h5">Loaders</Typography>
        <LoadingButton
          onClick={handleScheduleClick}
          loading={loadingSchedule}
          variant="outlined"
          className={style.btnItem}
        >
          <span>Load Schedules</span>
        </LoadingButton>
        <LoadingButton
          onClick={handleTeamClick}
          loading={loadingTeam}
          variant="outlined"
          className={style.btnItem}
        >
          <span>Load Teams</span>
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default Settings;
