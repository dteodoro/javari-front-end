import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";

import style from "./styles.module.scss";
import RecordCard from "../../components/RecordCard";
import TeamCard from "../../components/TeamCard";
import { ITeam } from "../../types/team";
import { RANK_STATUS } from "../../types/constants";
import RankContainer from "../../containers/RankContainer";
import { IPlayer } from "../../types/player";
import UserHero from "../../components/UserHero";
import TeamHero from "../../components/TeamHero";
import UserProvider, { UserContext } from "../../store/contexts/user";

const teamData: ITeam = {
  id: 1,
  logo: "/nfl.svg",
  name: "Raiders",
  nickName: "Las Vegas",
  displayName: "Las Vegas Raiders",
  abbreviation: "LV",
  stats: "(2-3-1)",
  favorite: true,
};

const players: IPlayer[] = [
  {
    id: 1,
    name: "Dário",
    fullName: "Dário Teodoro",
    points: 48,
    position: 1,
    rankStatus: RANK_STATUS.UP,
  },
  {
    id: 2,
    name: "Diego",
    fullName: "Diego Medeiros",
    points: 40,
    position: 2,
    rankStatus: RANK_STATUS.NO_CHANGE,
  },
  {
    id: 3,
    name: "Leandro",
    fullName: "Leandro Davi",
    points: 38,
    position: 3,
    rankStatus: RANK_STATUS.UP,
  },
  {
    id: 4,
    name: "Johnny",
    fullName: "Johnny Vitor",
    points: 37,
    position: 4,
    rankStatus: RANK_STATUS.DOWN,
  },
];

const Home: React.FC = () => {
  const player = useContext(UserContext);
  return (
    <Container className={style.root}>
      <TeamHero mainImage="/avatar2.svg" backgroundImage="/SVG-rams-logo.svg">
        <Typography margin={0} variant="h6">
          {player?.fullName}
        </Typography>
        <Typography margin={0} variant="subtitle2">
          {player?.position}
        </Typography>
        <Typography margin={0} variant="caption">
          {player?.rankStatus}
        </Typography>
      </TeamHero>

      <Grid container wrap={"wrap"}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Box component="section" mr={1.5} ml={1.5} mt={2}>
            {/* <Typography mt={2} mb={1} variant="h6">
              Records
            </Typography> */}
            <RecordCard rank={player?.rankStatus} />
            <Box component={"section"}>
              <Typography mt={2} mb={1} variant="h6">
                Favorite Team
              </Typography>
              <TeamCard team={teamData} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Box component={"section"} mr={1.5} ml={1.5}>
            <Typography mt={2} mb={1} variant="h6">
              Rank
            </Typography>
            <RankContainer players={players} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
