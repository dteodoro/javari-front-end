import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import MatchupCard from "../../components/MatchupCard";
import NavigateButtons from "../../components/NavigateButtons";
import TeamHero from "../../components/TeamHero";
import ListCardContainer from "../../containers/ListCardContainer";
import { MatchResult } from "../../types/match-result-enum";
import { ISession } from "../../types/session";
import { ITeam } from "../../types/team";
import style from "./styles.module.scss";

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

const Team = () => {
  return (
    <Container className={style.root}>
      <TeamHero
        backgroundImage="/SVG-rams-logo.svg"
        mainImage="/SVG-rams-logo.svg"
      >
        <Typography margin={0} variant="h6">
          Title
        </Typography>
        <Typography margin={0} variant="subtitle2">
          Subtitle
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
                    team={schedule.competitors.awayTeam}
                    winner={schedule.matchResult == MatchResult.HOME}
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
