import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { minWidth } from "@mui/system";
import { relative } from "path/posix";
import TeamCard from "../../components/TeamCard";
import { IDivision } from "../../types/division";
import { ITeam } from "../../types/team";

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

const useStyles = makeStyles({
  pageButtons: {
    position: "fixed",
    width: "100%",
    height: "56px",
    backgroundColor: "#f6f6f6",
  },
  divisionContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    // backgroundColor: "green",
  },
  classificationContent: {
    display: "flex",
    marginTop: "56px",
    padding: "8px",
    width: "10%",
  },
  buttonGroup: {
    marginTop: "8px",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "4px",
  },
  actionButton: {
    color: "red",
  },
  divisionTitle: {
    margin: "8px 0 8px 8px",
  },
  cardItem: {
    width: "100%",
  },
});

const Teams = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.pageButtons}>
        <Box textAlign="center">
          <ButtonGroup
            variant="contained"
            color="primary"
            disableElevation
            className={classes.buttonGroup}
          >
            <Button>Division</Button>
            <Button disabled>Conference</Button>
            <Button disabled>League</Button>
          </ButtonGroup>
        </Box>
      </div>
      <div className={classes.divisionContainer}>
        {divisions.map((d) => (
          <Grid
            container
            className={classes.classificationContent}
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={4}
          >
            <div className={classes.divisionTitle}>
              <Typography margin={0} variant="h6">
                {d.name}
              </Typography>
            </div>
            <Grid container spacing={0.5} className={classes.cardContainer}>
              {d.teams.map((team) => (
                <Grid key={team.id} item className={classes.cardItem}>
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

export default Teams;
