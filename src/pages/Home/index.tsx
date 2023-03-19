import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
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

const Home: React.FC = () => {
  const { bettor, favoriteTeam } = useAuth();
  const [player, setPlayer] = useState<IPlayer>({} as IPlayer);
  const [rivals, setRivals] = useState<IPlayer[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const bettorResp = await api.get(`/bettor/${bettor?.userId}`);
      setPlayer(bettorResp.data);
      const rivalsResp = await api.get(`/bettor/${bettor?.userId}/rivals`);
      setRivals(rivalsResp.data);
    }
    fetchData();
  }, [bettor]);

  return (
    <Container className={style.root}>
      <TeamHero
        mainImage="/avatar2.svg"
        backgroundImage={
          favoriteTeam?.id ? player.favoriteTeam?.logo : "/SVG-rams-logo.svg"
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
              >
                <AddBoxIcon onClick={() => navigate("/teams")} />
              </IconButton>
            )}
          </Box>
        </Grid>
        {rivals.length > 0 && (
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <ListCardContainer title="Rank">
              {rivals.map((player) => (
                <PlayerCard key={player.bettorId} player={player} />
              ))}
            </ListCardContainer>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
