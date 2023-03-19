import { Button, Container, Divider } from "@mui/material";

import NavigateButtons from "../../components/NavigateButtons";
import DivisionContainer from "../../containers/DivisionContainer";
import { IDivision } from "../../types/division";
import { ITeam } from "../../types/team";
import style from "./styles.module.scss";

const teamData: ITeam[] = [
  {
    id: "1",
    logo: "/nfl.svg",
    name: "Raiders",
    shortDisplayName: "Las Vegas",
    displayName: "Las Vegas Raiders",
    abbreviation: "LV",
    scoreSummary: "(2-3-1)",
  },
  {
    id: "2",
    logo: "/nfl.svg",
    name: "Raiders",
    shortDisplayName: "Las Vegas",
    displayName: "Las Vegas Raiders",
    abbreviation: "LV",
    scoreSummary: "(2-3-1)",
  },
  {
    id: "3",
    logo: "/nfl.svg",
    name: "Raiders",
    shortDisplayName: "Las Vegas",
    displayName: "Las Vegas Raiders",
    abbreviation: "LV",
    scoreSummary: "(2-3-1)",
  },
  {
    id: "4",
    logo: "/nfl.svg",
    name: "Raiders",
    shortDisplayName: "Las Vegas",
    displayName: "Las Vegas Raiders",
    abbreviation: "LV",
    scoreSummary: "(2-3-1)",
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
    <Container>
      <NavigateButtons fixed>
        <Button>Division</Button>
        <Button disabled>Conference</Button>
        <Button disabled>League</Button>
      </NavigateButtons>
      <Divider sx={{ marginTop: "56px" }} />
      <DivisionContainer divisions={divisions} />
    </Container>
  );
};

export default Standings;
