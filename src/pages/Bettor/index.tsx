import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import style from "./styles.module.scss";
import RecordCard from "../../components/RecordCard";
import TeamCard from "../../components/TeamCard";
import TeamHero from "../../components/TeamHero";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import BetResultCard from "../../components/BetResultCard";
import { IScheduleBySeason } from "../../types/schedule";
import ListCardContainer from "../../containers/ListCardContainer";
import api from "../../services/api";
import { IPlayer } from "../../types/player";
import { API_CORE } from "../../types/constants";

const Bettor: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [rival, setRival] = useState<IPlayer>({} as IPlayer);
  const [lastGames, setLastGames] = useState<IScheduleBySeason[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchData() {
      await api.get(`${API_CORE}/bettor/${id}`).then(async (resp) => {
        let currentPlayer = resp.data;
        if (currentPlayer.image) {
          await api
            .get(`${API_CORE}/bettor/image/${currentPlayer.image}`, {
              responseType: "blob",
            })
            .then((resp) => {
              currentPlayer.image = URL.createObjectURL(resp.data);
              setRival(currentPlayer);
            });
        }
      });
      const schedulesResp = await api.get(
        `${API_CORE}/schedules/season/2023/bettor/${id}`
      );
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
        mainImage="/avatar2.svg"
        backgroundImage={
          rival?.favoriteTeam ? rival.favoriteTeam.logo : "/SVG-rams-logo.svg"
        }
      >
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
              rank={-rival.currentPosition - rival.previousPosition}
              score={rival.score}
            />
          </Box>
          {rival?.favoriteTeam && (
            <Box component="section" mr={1.5} ml={1.5} mt={2}>
              <Typography mt={2} mb={1} variant="h6">
                Favorite Team
              </Typography>
              <TeamCard team={rival?.favoriteTeam} editable={false} />
            </Box>
          )}
        </Grid>
      </Grid>
      <Box component="section" mr={1.5} ml={1.5} mt={2}>
        <Typography mt={2} mb={0} variant="h6">
          Last Games
        </Typography>
      </Box>
      <Grid container wrap={"wrap"}>
        {lastGames.map((season) => (
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <ListCardContainer title={season.seasonName}>
              {season.schedules.map((schedule) => (
                <BetResultCard key={schedule.id} schedule={schedule} />
              ))}
            </ListCardContainer>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Bettor;
