import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import TeamCard from "../../components/TeamCard";
import { IDivision } from "../../types/division";
import { ITeam } from "../../types/team";
import style from "./styles.module.scss";

const teamData: ITeam[] = [
  {
    id: 1,
    logo: "/nfl.svg",
    fullName: "Tampa Bay",
    mediumName: "Buccaneers",
    shortName: "TBB",
    stats: "(2-3-1)",
  },
  {
    id: 2,
    logo: "/nfl.svg",
    fullName: "Away Team",
    mediumName: "Team 2",
    shortName: "TM2",
    stats: "(5-1)",
  },
  {
    id: 3,
    logo: "/nfl.svg",
    fullName: "Away Team",
    mediumName: "Team 2",
    shortName: "TM2",
    stats: "(5-1)",
  },
  {
    id: 4,
    logo: "/nfl.svg",
    fullName: "Away Team",
    mediumName: "Team 2",
    shortName: "TM2",
    stats: "(5-1)",
  },
];

const divisions: IDivision[] = [
  {
    name: "AFC North",
    teams: teamData,
  },
  {
    name: "AFC Lest",
    teams: teamData,
  },
  {
    name: "AFC Sul",
    teams: teamData,
  },
  {
    name: "AFC Oest",
    teams: teamData,
  },
];

const Standings = () => {
  return (
    <div>
      <div className={style.pageButtons}>
        <Box textAlign="center">
          <ButtonGroup
            variant="contained"
            color="primary"
            disableElevation
            className={style.buttonGroup}
          >
            <Button>Division</Button>
            <Button disabled>Conference</Button>
            <Button disabled>League</Button>
          </ButtonGroup>
        </Box>
      </div>
      <div className={style.divisionContainer}>
        {divisions.map((d) => (
          <Grid
            container
            className={style.classificationContent}
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={4}
          >
            <div className={style.divisionTitle}>
              <Typography margin={0} variant="h6">
                {d.name}
              </Typography>
            </div>
            <Grid container spacing={0.5} className={style.cardContainer}>
              {d.teams.map((team) => (
                <Grid key={team.id} item className={style.cardItem}>
                  <TeamCard team={team} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </div>
    </div>
  );
};

export default Standings;
