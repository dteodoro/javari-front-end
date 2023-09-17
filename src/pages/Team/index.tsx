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
import style from "./styles.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { ITeam } from "../../types/team";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { IScheduleBySeason } from "../../types/schedule";
import { API_CORE } from "../../types/constants";
import NoContent from "../../components/NoContent";

const Team = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [team, setTeam] = useState<ITeam>({} as ITeam);
  const [lastGames, setLastGames] = useState<IScheduleBySeason[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchData() {
      const teamResp = await api.get(`${API_CORE}/teams/${id}`);
      const schedulesResp = await api.get(
        `${API_CORE}/schedules/season/2023/team/${id}`
      );
      setTeam(teamResp.data);
      setLastGames(schedulesResp.data);
    }
    fetchData();
  }, [id]);

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
          {team.scoreScoreSummary}
        </Typography>
      </TeamHero>
      <Box>
        <NavigateButtons>
          <Button>Last Games</Button>
          <Button disabled>Stats</Button>
        </NavigateButtons>
        {lastGames.length === 0 ? (
          <NoContent label="No Results" />
        ) : (
          <Grid container className={style.divisionContainer}>
            <Grid
              container
              className={style.scheduleContainer}
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={4}
            >
              {lastGames.map((season) => (
                <ListCardContainer title={season.seasonName}>
                  {season.schedules.map((schedule) => (
                    <MatchupCard
                      competitors={schedule.competitors}
                      team={
                        schedule?.competitors.find((c) => c.team.id === team.id)
                          ?.team
                      }
                    />
                  ))}
                </ListCardContainer>
              ))}
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default Team;
