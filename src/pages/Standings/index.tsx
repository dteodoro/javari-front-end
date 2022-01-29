import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import NavigateButtons from "../../components/NavigateButtons";
import TeamCard from "../../components/TeamCard";
import { IDivision } from "../../types/division";
import { ITeam } from "../../types/team";
import style from "./styles.module.scss";

const teamData: ITeam[] = [
  {
    id: 1,
    logo: "/nfl.svg",
    name: "Raiders",
    nickName: "Las Vegas",
    displayName: "Las Vegas Raiders",
    abbreviation: "LV",
    stats: "(2-3-1)",
  },
  {
    id: 2,
    logo: "/nfl.svg",
    name: "Raiders",
    nickName: "Las Vegas",
    displayName: "Las Vegas Raiders",
    abbreviation: "LV",
    stats: "(2-3-1)",
  },
  {
    id: 3,
    logo: "/nfl.svg",
    name: "Raiders",
    nickName: "Las Vegas",
    displayName: "Las Vegas Raiders",
    abbreviation: "LV",
    stats: "(2-3-1)",
  },
  {
    id: 4,
    logo: "/nfl.svg",
    name: "Raiders",
    nickName: "Las Vegas",
    displayName: "Las Vegas Raiders",
    abbreviation: "LV",
    stats: "(2-3-1)",
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
        <NavigateButtons>
          <Button>Division</Button>
          <Button disabled>Conference</Button>
          <Button disabled>League</Button>
        </NavigateButtons>
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
