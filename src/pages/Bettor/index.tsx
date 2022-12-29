import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import style from "./styles.module.scss";
import RecordCard from "../../components/RecordCard";
import TeamCard from "../../components/TeamCard";
import { ITeam } from "../../types/team";
import { RANK_STATUS } from "../../types/constants";
import { IPlayer } from "../../types/player";
import TeamHero from "../../components/TeamHero";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import BetResultCard from "../../components/BetResultCard";
import { ISchedule } from "../../types/schedule";
import { ISession } from "../../types/session";
import ListCardContainer from "../../containers/ListCardContainer";
import { useAuth } from "../../store/contexts/Auth/AuthContext";

const sessions: ISession[] = [
  //   {
  //     name: "WILD CARD",
  //     schedules: [
  //       {
  //         id: "1",
  //         matchDate: new Date(),
  //         matchStatus: "NOT STARTED",
  //         competitors: {
  //           homeTeam: {
  //             id: 1,
  //             logo: "/nfl.svg",
  //             name: "Raiders",
  //             nickName: "Las Vegas",
  //             displayName: "Las Vegas Raiders",
  //             abbreviation: "LV",
  //             stats: "(2-3-1)",
  //           },
  //           awayTeam: {
  //             id: 2,
  //             logo: "/nfl.svg",
  //             name: "Rams",
  //             nickName: "Los Angeles",
  //             displayName: "Los Angeles Rams",
  //             abbreviation: "LAR",
  //             stats: "(5-1)",
  //           },
  //         },
  //         matchResult: MatchResult.HOME,
  //       },
  //       {
  //         id: 2,
  //         matchDate: new Date(),
  //         matchStatus: "NOT STARTED",
  //         competitors: {
  //           homeTeam: {
  //             id: 3,
  //             logo: "/nfl.svg",
  //             name: "Raiders",
  //             nickName: "Las Vegas",
  //             displayName: "Las Vegas Raiders",
  //             abbreviation: "LV",
  //             stats: "(2-3-1)",
  //           },
  //           awayTeam: {
  //             id: 4,
  //             logo: "/nfl.svg",
  //             name: "Rams",
  //             nickName: "Los Angeles",
  //             displayName: "Los Angeles Rams",
  //             abbreviation: "LAR",
  //             stats: "(5-1)",
  //           },
  //         },
  //         matchResult: MatchResult.HOME,
  //       },
  //       {
  //         id: 3,
  //         matchDate: new Date(),
  //         matchStatus: "NOT STARTED",
  //         competitors: {
  //           homeTeam: {
  //             id: 5,
  //             logo: "/nfl.svg",
  //             name: "Raiders",
  //             nickName: "Las Vegas",
  //             displayName: "Las Vegas Raiders",
  //             abbreviation: "LV",
  //             stats: "(2-3-1)",
  //           },
  //           awayTeam: {
  //             id: 6,
  //             logo: "/nfl.svg",
  //             name: "Rams",
  //             nickName: "Los Angeles",
  //             displayName: "Los Angeles Rams",
  //             abbreviation: "LAR",
  //             stats: "(5-1)",
  //           },
  //         },
  //       },
  //       {
  //         id: 4,
  //         matchDate: new Date(),
  //         matchStatus: "NOT STARTED",
  //         competitors: {
  //           homeTeam: {
  //             id: 7,
  //             logo: "/nfl.svg",
  //             name: "Raiders",
  //             nickName: "Las Vegas",
  //             displayName: "Las Vegas Raiders",
  //             abbreviation: "LV",
  //             stats: "(2-3-1)",
  //           },
  //           awayTeam: {
  //             id: 8,
  //             logo: "/nfl.svg",
  //             name: "Rams",
  //             nickName: "Los Angeles",
  //             displayName: "Los Angeles Rams",
  //             abbreviation: "LAR",
  //             stats: "(5-1)",
  //           },
  //         },
  //         matchResult: MatchResult.AWAY,
  //       },
  //     ],
  //   },
  //   {
  //     name: "WILD CARD",
  //     schedules: [
  //       {
  //         id: 5,
  //         matchDate: new Date(),
  //         matchStatus: "NOT STARTED",
  //         competitors: {
  //           homeTeam: {
  //             id: 9,
  //             logo: "/nfl.svg",
  //             name: "Raiders",
  //             nickName: "Las Vegas",
  //             displayName: "Las Vegas Raiders",
  //             abbreviation: "LV",
  //             stats: "(2-3-1)",
  //           },
  //           awayTeam: {
  //             id: 10,
  //             logo: "/nfl.svg",
  //             name: "Rams",
  //             nickName: "Los Angeles",
  //             displayName: "Los Angeles Rams",
  //             abbreviation: "LAR",
  //             stats: "(5-1)",
  //           },
  //         },
  //         matchResult: MatchResult.AWAY,
  //       },
  //       {
  //         id: 6,
  //         matchDate: new Date(),
  //         matchStatus: "NOT STARTED",
  //         competitors: {
  //           homeTeam: {
  //             id: 11,
  //             logo: "/nfl.svg",
  //             name: "Raiders",
  //             nickName: "Las Vegas",
  //             displayName: "Las Vegas Raiders",
  //             abbreviation: "LV",
  //             stats: "(2-3-1)",
  //           },
  //           awayTeam: {
  //             id: 12,
  //             logo: "/nfl.svg",
  //             name: "Rams",
  //             nickName: "Los Angeles",
  //             displayName: "Los Angeles Rams",
  //             abbreviation: "LAR",
  //             stats: "(5-1)",
  //           },
  //         },
  //       },
  //       {
  //         id: 7,
  //         matchDate: new Date(),
  //         matchStatus: "NOT STARTED",
  //         competitors: {
  //           homeTeam: {
  //             id: 13,
  //             logo: "/nfl.svg",
  //             name: "Raiders",
  //             nickName: "Las Vegas",
  //             displayName: "Las Vegas Raiders",
  //             abbreviation: "LV",
  //             stats: "(2-3-1)",
  //           },
  //           awayTeam: {
  //             id: 14,
  //             logo: "/nfl.svg",
  //             name: "Rams",
  //             nickName: "Los Angeles",
  //             displayName: "Los Angeles Rams",
  //             abbreviation: "LAR",
  //             stats: "(5-1)",
  //           },
  //         },
  //       },
  //       {
  //         id: 8,
  //         matchDate: new Date(),
  //         matchStatus: "NOT STARTED",
  //         competitors: {
  //           homeTeam: {
  //             id: 15,
  //             logo: "/nfl.svg",
  //             name: "Raiders",
  //             nickName: "Las Vegas",
  //             displayName: "Las Vegas Raiders",
  //             abbreviation: "LV",
  //             stats: "(2-3-1)",
  //           },
  //           awayTeam: {
  //             id: 16,
  //             logo: "/nfl.svg",
  //             name: "Rams",
  //             nickName: "Los Angeles",
  //             displayName: "Los Angeles Rams",
  //             abbreviation: "LAR",
  //             stats: "(5-1)",
  //           },
  //         },
  //         matchResult: MatchResult.AWAY,
  //       },
  //     ],
  //   },
];

const Bettor: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { user: player } = useAuth();
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
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box component="section" mr={1.5} ml={1.5} mt={2}>
            <Typography mt={2} mb={1} variant="h6">
              Score
            </Typography>
            <RecordCard rank={player?.rankStatus} />
          </Box>
          <Box component="section" mr={1.5} ml={1.5} mt={2}>
            <Typography mt={2} mb={1} variant="h6">
              Favorite Team
            </Typography>
            <TeamCard team={player?.favoriteTeam} />
          </Box>
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
