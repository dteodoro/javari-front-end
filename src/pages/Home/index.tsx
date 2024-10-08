import {
  Box,
  Container,
  Grid,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import style from "./styles.module.scss";
import RecordCard from "../../components/RecordCard";
import TeamCard from "../../components/TeamCard";
import { IPlayer } from "../../types/player";
import TeamHero from "../../components/TeamHero";
import ListCardContainer from "../../containers/ListCardContainer";
import PlayerCard from "../../components/PlayerCard";
import { useAuth } from "../../store/contexts/Auth/AuthContext";
import api from "../../services/api";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useNavigate } from "react-router-dom";
import { API_CORE } from "../../types/constants";
import { useBettorContext } from "../../store/contexts/Auth/BettorContext";
import Loading from "../../components/Loading";

const Home: React.FC = () => {
  const { userLogged, setLoading, signOut } = useAuth();
  const { bettor, favoriteTeam } = useBettorContext();
  const [player, setPlayer] = useState<IPlayer>({} as IPlayer);
  const [rivals, setRivals] = useState<IPlayer[]>([]);
  const [rivalsLoading, setRivalsLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLogged) {
      navigate("/login");
      return;
    }
    async function fetchData() {
      await api
        .get(`${API_CORE}/bettor/${bettor?.userId}`)
        .then(async (resp) => {
          let currentPlayer = resp.data;
          if (currentPlayer.image) {
            await api
              .get(`${API_CORE}/bettor/image/${currentPlayer.image}`, {
                responseType: "blob",
              })
              .then((resp) => {
                currentPlayer.image = URL.createObjectURL(resp.data);
              });
          }
          setPlayer(currentPlayer);
          setPageLoading(false);
        })
        .catch(() => {
          signOut();
        });

      await api
        .get(`${API_CORE}/bettor/${bettor?.userId}/rivals`)
        .then(async (resp) => {
          let rivals = resp.data;
          for (let rival of rivals) {
            if (rival.image) {
              await api
                .get(`${API_CORE}/bettor/image/${rival.image}`, {
                  responseType: "blob",
                })
                .then((resp) => {
                  rival.image = URL.createObjectURL(resp.data);
                });
            }
          }
          setRivals(rivals);
          setRivalsLoading(false);
        });
    }
    if (bettor?.userId) {
      fetchData();
      setLoading(false);
    }
  }, [bettor, userLogged]);

  return (
    <Container className={style.root}>
      {pageLoading ? (
        <>
          <Loading onLoading />
        </>
      ) : (
        <>
          <TeamHero
            mainImage={player.image}
            backgroundImage={
              favoriteTeam?.id
                ? player.favoriteTeam?.logo
                : "/SVG-rams-logo.svg"
            }
            editable
          >
            <Typography margin={0} variant="h6">
              {player?.nickName}
            </Typography>
            <Typography margin={0} variant="subtitle2">
              {player?.currentPosition}
            </Typography>
            <Typography margin={0} variant="caption">
              {player?.previousPosition}
            </Typography>
          </TeamHero>
          <Grid container wrap={"wrap"}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box component="section" mr={1.5} ml={1.5} mt={2}>
                <Typography mt={2} mb={1} variant="h6">
                  Score
                </Typography>
                <RecordCard
                  score={player?.score}
                  rank={player?.currentPosition - player?.previousPosition}
                />
              </Box>
              <Box component="section" mr={1.5} ml={1.5} mt={2}>
                <Typography mt={2} mb={1} variant="h6">
                  Favorite Team
                </Typography>
                {favoriteTeam?.id ? (
                  <TeamCard team={player?.favoriteTeam} editable={false} />
                ) : (
                  <IconButton
                    color="primary"
                    aria-label="add team"
                    component="label"
                    onClick={() => navigate("/teams")}
                  >
                    <AddBoxIcon />
                  </IconButton>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <ListCardContainer title="Rank">
                {rivalsLoading
                  ? [1, 2, 3, 4].map(() => (
                      <Skeleton variant="rectangular" height={60} />
                    ))
                  : rivals.map((player) => (
                      <PlayerCard key={player.bettorId} player={player} />
                    ))}
              </ListCardContainer>
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Home;
