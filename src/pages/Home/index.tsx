import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import style from "./styles.module.scss";
import RecordCard from "../../components/RecordCard";
import TeamCard from "../../components/TeamCard";
import { ITeam } from "../../types/team";
import { RANK_STATUS } from "../../types/constants";
import { IPlayer } from "../../types/player";
import TeamHero from "../../components/TeamHero";
import ListCardContainer from "../../containers/ListCardContainer";
import PlayerCard from "../../components/PlayerCard";
import { useAuth } from "../../store/contexts/Auth/AuthContext";
import api from "../../services/api";
import AddBoxIcon from "@mui/icons-material/AddBox";

const teamData: ITeam = {
  id: 1,
  logo: "/nfl.svg",
  name: "Raiders",
  shortDisplayName: "Las Vegas",
  displayName: "Las Vegas Raiders",
  abbreviation: "LV",
  scoreSummary: "(2-3-1)",
};

const players: IPlayer[] = [
  {
    bettorId: "1",
    nickName: "Dário Teodoro",
    points: 48,
    currentPosition: 1,
    previousPosition: 2,
  },
  {
    bettorId: "2",
    nickName: "Diego Medeiros",
    points: 40,
    currentPosition: 2,
    previousPosition: 1,
  },
  {
    bettorId: "3",
    nickName: "Leandro Davi",
    points: 38,
    currentPosition: 3,
    previousPosition: 3,
  },
  {
    bettorId: "4",
    nickName: "Johnny Vitor",
    points: 37,
    currentPosition: 4,
    previousPosition: 4,
  },
];

const Home: React.FC = () => {
  const { bettor } = useAuth();
  const [player, setPlayer] = useState<IPlayer>({} as IPlayer);
  const [rivals, setRivals] = useState<IPlayer[]>([]);

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
        backgroundImage="/SVG-rams-logo.svg"
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
            {player?.favoriteTeam ? (
              <TeamCard team={player?.favoriteTeam} />
            ) : (
              <IconButton
                color="primary"
                aria-label="add team"
                component="label"
              >
                <AddBoxIcon />
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
