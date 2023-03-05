import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import style from "./styles.module.scss";
import RecordCard from "../../components/RecordCard";
import TeamCard from "../../components/TeamCard";
import TeamHero from "../../components/TeamHero";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import BetResultCard from "../../components/BetResultCard";
import { ISchedule } from "../../types/schedule";
import { ISession } from "../../types/session";
import ListCardContainer from "../../containers/ListCardContainer";
import api from "../../services/api";
import { IPlayer } from "../../types/player";

const sessions: ISession[] = [];

const Bettor: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [rival, setRival] = useState<IPlayer>({} as IPlayer);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchData() {
      const response = await api.get(`/bettor/${id}`);
      setRival(response.data);
    }
    fetchData();
  }, []);

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

      <TeamHero mainImage="/avatar2.svg" backgroundImage="/SVG-rams-logo.svg">
        <Typography mt={2} variant="h6">
          {rival?.nickName}
        </Typography>
        <Typography mt={1} variant="subtitle2">
          {rival?.currentPosition}
        </Typography>
        <Typography mt={1} variant="caption">
          {rival?.currentPosition}
        </Typography>
      </TeamHero>

      <Grid container wrap={"wrap"}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box component="section" mr={1.5} ml={1.5} mt={2}>
            <Typography mt={2} mb={1} variant="h6">
              Score
            </Typography>
            <RecordCard
              rank={rival.previousPosition - rival.currentPosition}
              score={rival.score}
            />
          </Box>
          {rival?.favoriteTeam && (
            <Box component="section" mr={1.5} ml={1.5} mt={2}>
              <Typography mt={2} mb={1} variant="h6">
                Favorite Team
              </Typography>
              <TeamCard team={rival?.favoriteTeam} />
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Box component="section" mr={1.5} ml={1.5} mt={2}>
            <Typography mt={2} mb={0} variant="h6">
              Last Games
            </Typography>
          </Box>
          {sessions.map((session) => (
            <Box component="section" mt={2}>
              <ListCardContainer title={session.name}>
                {session.schedules.map((schedule: ISchedule) => (
                  <BetResultCard
                    team={
                      schedule.competitors.find((c) => c?.homeAway == "away")
                        ?.team
                    }
                    winner={true}
                  />
                ))}
              </ListCardContainer>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Bettor;
