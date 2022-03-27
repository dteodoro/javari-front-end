import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import style from "./styles.module.scss";
import RecordCard from "../../components/RecordCard";
import TeamCard from "../../components/TeamCard";
import { ITeam } from "../../types/team";
import { RANK_STATUS } from "../../types/constants";
import { IPlayer } from "../../types/player";
import TeamHero from "../../components/TeamHero";
import { UserContext } from "../../store/contexts/user";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import BetResultCard from "../../components/BetResultCard";
import { MatchResult } from "../../types/match-result-enum";
import { ISchedule } from "../../types/schedule";
import { ISession } from "../../types/session";
import ListCardContainer from "../../containers/ListCardContainer";

const sessions: ISession[] = [
  {
    name: "WILD CARD",
    schedules: [
      {
        id: 1,
        matchDate: new Date(),
        matchStatus: "NOT STARTED",
        competitors: {
          homeTeam: {
            id: 1,
            logo: "/nfl.svg",
            name: "Raiders",
            nickName: "Las Vegas",
            displayName: "Las Vegas Raiders",
            abbreviation: "LV",
            stats: "(2-3-1)",
          },
          awayTeam: {
            id: 2,
            logo: "/nfl.svg",
            name: "Rams",
            nickName: "Los Angeles",
            displayName: "Los Angeles Rams",
            abbreviation: "LAR",
            stats: "(5-1)",
          },
        },
        matchResult: MatchResult.HOME,
      },
      {
        id: 2,
        matchDate: new Date(),
        matchStatus: "NOT STARTED",
        competitors: {
          homeTeam: {
            id: 3,
            logo: "/nfl.svg",
            name: "Raiders",
            nickName: "Las Vegas",
            displayName: "Las Vegas Raiders",
            abbreviation: "LV",
            stats: "(2-3-1)",
          },
          awayTeam: {
            id: 4,
            logo: "/nfl.svg",
            name: "Rams",
            nickName: "Los Angeles",
            displayName: "Los Angeles Rams",
            abbreviation: "LAR",
            stats: "(5-1)",
          },
        },
        matchResult: MatchResult.HOME,
      },
      {
        id: 3,
        matchDate: new Date(),
        matchStatus: "NOT STARTED",
        competitors: {
          homeTeam: {
            id: 5,
            logo: "/nfl.svg",
            name: "Raiders",
            nickName: "Las Vegas",
            displayName: "Las Vegas Raiders",
            abbreviation: "LV",
            stats: "(2-3-1)",
          },
          awayTeam: {
            id: 6,
            logo: "/nfl.svg",
            name: "Rams",
            nickName: "Los Angeles",
            displayName: "Los Angeles Rams",
            abbreviation: "LAR",
            stats: "(5-1)",
          },
        },
      },
      {
        id: 4,
        matchDate: new Date(),
        matchStatus: "NOT STARTED",
        competitors: {
          homeTeam: {
            id: 7,
            logo: "/nfl.svg",
            name: "Raiders",
            nickName: "Las Vegas",
            displayName: "Las Vegas Raiders",
            abbreviation: "LV",
            stats: "(2-3-1)",
          },
          awayTeam: {
            id: 8,
            logo: "/nfl.svg",
            name: "Rams",
            nickName: "Los Angeles",
            displayName: "Los Angeles Rams",
            abbreviation: "LAR",
            stats: "(5-1)",
          },
        },
        matchResult: MatchResult.AWAY,
      },
    ],
  },
  {
    name: "WILD CARD",
    schedules: [
      {
        id: 5,
        matchDate: new Date(),
        matchStatus: "NOT STARTED",
        competitors: {
          homeTeam: {
            id: 9,
            logo: "/nfl.svg",
            name: "Raiders",
            nickName: "Las Vegas",
            displayName: "Las Vegas Raiders",
            abbreviation: "LV",
            stats: "(2-3-1)",
          },
          awayTeam: {
            id: 10,
            logo: "/nfl.svg",
            name: "Rams",
            nickName: "Los Angeles",
            displayName: "Los Angeles Rams",
            abbreviation: "LAR",
            stats: "(5-1)",
          },
        },
        matchResult: MatchResult.AWAY,
      },
      {
        id: 6,
        matchDate: new Date(),
        matchStatus: "NOT STARTED",
        competitors: {
          homeTeam: {
            id: 11,
            logo: "/nfl.svg",
            name: "Raiders",
            nickName: "Las Vegas",
            displayName: "Las Vegas Raiders",
            abbreviation: "LV",
            stats: "(2-3-1)",
          },
          awayTeam: {
            id: 12,
            logo: "/nfl.svg",
            name: "Rams",
            nickName: "Los Angeles",
            displayName: "Los Angeles Rams",
            abbreviation: "LAR",
            stats: "(5-1)",
          },
        },
      },
      {
        id: 7,
        matchDate: new Date(),
        matchStatus: "NOT STARTED",
        competitors: {
          homeTeam: {
            id: 13,
            logo: "/nfl.svg",
            name: "Raiders",
            nickName: "Las Vegas",
            displayName: "Las Vegas Raiders",
            abbreviation: "LV",
            stats: "(2-3-1)",
          },
          awayTeam: {
            id: 14,
            logo: "/nfl.svg",
            name: "Rams",
            nickName: "Los Angeles",
            displayName: "Los Angeles Rams",
            abbreviation: "LAR",
            stats: "(5-1)",
          },
        },
      },
      {
        id: 8,
        matchDate: new Date(),
        matchStatus: "NOT STARTED",
        competitors: {
          homeTeam: {
            id: 15,
            logo: "/nfl.svg",
            name: "Raiders",
            nickName: "Las Vegas",
            displayName: "Las Vegas Raiders",
            abbreviation: "LV",
            stats: "(2-3-1)",
          },
          awayTeam: {
            id: 16,
            logo: "/nfl.svg",
            name: "Rams",
            nickName: "Los Angeles",
            displayName: "Los Angeles Rams",
            abbreviation: "LAR",
            stats: "(5-1)",
          },
        },
        matchResult: MatchResult.AWAY,
      },
    ],
  },
];

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
    slug: "dario",
    fullName: "Dário Teodoro",
    points: 48,
    position: 1,
    rankStatus: RANK_STATUS.UP,
  },
  {
    id: 2,
    name: "Diego",
    slug: "diego",
    fullName: "Diego Medeiros",
    points: 40,
    position: 2,
    rankStatus: RANK_STATUS.NO_CHANGE,
  },
  {
    id: 3,
    name: "Leandro",
    slug: "leandro",
    fullName: "Leandro Davi",
    points: 38,
    position: 3,
    rankStatus: RANK_STATUS.UP,
  },
  {
    id: 4,
    name: "Johnny",
    slug: "johnny",
    fullName: "Johnny Vitor",
    points: 37,
    position: 4,
    rankStatus: RANK_STATUS.DOWN,
  },
];

const Bettor: React.FC = () => {
  const player = useContext(UserContext);
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

      <TeamHero mainImage="/avatar2.svg" backgroundImage="/SVG-rams-logo.svg">
        <Typography mt={2} variant="h6">
          {player?.fullName}
        </Typography>
        <Typography mt={1} variant="subtitle2">
          {player?.position}
        </Typography>
        <Typography mt={1} variant="caption">
          {player?.rankStatus}
        </Typography>
      </TeamHero>

      <Grid container wrap={"wrap"}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Box component="section" mr={1.5} ml={1.5} mt={2}>
            <RecordCard rank={player?.rankStatus} />
            <Box component={"section"}>
              <Typography mt={2} mb={1} variant="h6">
                Favorite Team
              </Typography>
              <TeamCard team={teamData} />
            </Box>
          </Box>
        </Grid>
        <Typography mt={3} ml={2} variant="h5">
          Last Games
        </Typography>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          {sessions.map((session) => (
            <ListCardContainer title={session.name}>
              {session.schedules.map((schedule: ISchedule) => (
                <BetResultCard
                  team={schedule.competitors.awayTeam}
                  winner={schedule.matchResult == MatchResult.HOME}
                />
              ))}
            </ListCardContainer>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Bettor;
