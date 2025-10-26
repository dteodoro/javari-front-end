import { Box, Button, Container, Divider, Typography } from "@mui/material";

import NavigateButtons from "../../components/NavigateButtons";
import DivisionContainer from "../../containers/DivisionContainer";
import style from "./styles.module.scss";
import { IDivision } from "../../types/division";
import { ITeam } from "../../types/team";
import { useEffect, useState } from "react";
import { IConference } from "../../types/conference";
import { API_CORE } from "../../types/constants";
import api from "../../services/api";
import ConferenceContainer from "../../containers/ConferenceContainer";
import LeagueContainer from "../../containers/LeagueContainer";

const Standings = () => {
    const [conferences, setConferences] = useState<IConference[]>([]);
    const [division, setDivision] = useState(true);
    const [conference, setConference] = useState(false);
    const [league, setLeague] = useState(false);
    useEffect(() => {
    async function fetchData() {
      const teamsResp = await api.get(
        `${API_CORE}/teams?conference=&division=`
      );
      setConferences(teamsResp.data);
    }
    fetchData();
  }, []);

  return (
    <Container className={style.standingsContainer}>
      <Container>
      <NavigateButtons>
        <Button
          onClick={()=>{
            setDivision(true);
            setConference(false);
            setLeague(false)}}
          className={!division ? style.optSelected : ""}
        >Division</Button>
        <Button
          onClick={()=>{
            setDivision(false);
            setConference(true);
            setLeague(false);
          }}
          className={!conference ? style.optSelected : ""}
        >Conference</Button>
        <Button
          onClick={()=>{
            setDivision(false);
            setConference(false);
            setLeague(true);
          }}
          className={!league ? style.optSelected : ""}
        >League</Button>
      </NavigateButtons>
      </Container>
      <Divider sx={{ marginTop: "8px" }} />
      {division && conferences.map((conf) => (
        <DivisionContainer
          key={conf.name}
          divisions={conf.divisions}
          conference={conf.name}
        />
      ))}
      {conference && (
        <ConferenceContainer
          key={"all-conference"}
          conferences={conferences}
        />
      )}
      {league && (
        <LeagueContainer
          key={"all-league"}
          conferences={conferences}
        />
      )}
    </Container>
  );
};

export default Standings;
