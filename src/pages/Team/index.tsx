import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import MatchupCard from "../../components/MatchupCard";
import NavigateButtons from "../../components/NavigateButtons";
import TeamHero from "../../components/TeamHero";
import ListCardContainer from "../../containers/ListCardContainer";
import { ISession } from "../../types/session";
import style from "./styles.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { ITeam } from "../../types/team";
import { useEffect, useState } from "react";
import api from "../../services/api";

const sessions: ISession[] = [];

const Team = () => {
  const { id } = useParams();
  const [team, setTeam] = useState<ITeam>({} as ITeam);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`teams/${id}`);
      setTeam(response.data);
    }
    fetchData();
  }, []);

  const navigate = useNavigate();
  return (
    <Container className={style.root}>
      <IconButton
        className={style.backButton}
        onClick={() => {
          navigate(-1);
        }}
      >
        <ChevronLeftIcon />
      </IconButton>
      <TeamHero
        backgroundImage={team.logo}
        mainImage={team.logo}
        teamColor={team.color}
        alternativeColor={team.color}
      >
        <Typography margin={0} variant="h6">
          {team.name}
        </Typography>
        <Typography margin={0} variant="subtitle2">
          {team.displayName}
        </Typography>
        <Typography margin={0} variant="caption">
          Description
        </Typography>
      </TeamHero>
      <Box>
        <NavigateButtons>
          <Button>Last Games</Button>
          <Button disabled>Stats</Button>
        </NavigateButtons>
        <Grid container className={style.divisionContainer}>
          {sessions.map((session) => (
            <Grid
              container
              className={style.scheduleContainer}
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={4}
            >
              <ListCardContainer title={session.name}>
                {session.schedules.map((schedule) => (
                  <MatchupCard
                    team={
                      schedule?.competitors.find((c) => c.homeAway == "away")
                        ?.team
                    }
                    winner={true}
                  />
                ))}
              </ListCardContainer>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Team;
