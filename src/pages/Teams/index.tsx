import {
  Box,
  Container,
  Divider,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import DivisionContainer from "../../containers/DivisionContainer";
import { CONFERENCES, DIVISIONS } from "../../types/constants";
import { IDivision } from "../../types/division";
import { ITeam } from "../../types/team";
import style from "./styles.module.scss";

const teamData: ITeam[] = [
  {
    id: 1,
    logo: "/nfl.svg",
    name: "Raiders",
    shortDisplayName: "Las Vegas",
    displayName: "Las Vegas Raiders",
    abbreviation: "LV",
    scoreSummary: "(2-3-1)",
  },
  {
    id: 2,
    logo: "/nfl.svg",
    name: "Raiders",
    shortDisplayName: "Las Vegas",
    displayName: "Las Vegas Raiders",
    abbreviation: "LV",
    scoreSummary: "(2-3-1)",
  },
  {
    id: 3,
    logo: "/nfl.svg",
    name: "Raiders",
    shortDisplayName: "Las Vegas",
    displayName: "Las Vegas Raiders",
    abbreviation: "LV",
    scoreSummary: "(2-3-1)",
  },
  {
    id: 4,
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

const Teams = () => {
  return (
    <Container className={style.root}>
      <Container className={style.filterBar}>
        <Typography
          fontWeight="bold"
          variant="h6"
          className={style.filterBarTitle}
        >
          NFL TEAMS
        </Typography>
        <Box className={style.selectsGroup}>
          <Select
            className={style.selectItem}
            // onChange={handleChangeYear}
            // value={year}
          >
            {CONFERENCES.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </Select>
          <Select
            className={`${style.selectItem} ${style.lastSelect}`}
            // onChange={handleChangeWeek}
            // value={week}
          >
            {DIVISIONS.map((d) => (
              <MenuItem key={d} value={d}>
                {d}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Container>
      <Divider />
      <DivisionContainer divisions={divisions} />
    </Container>
  );
};

export default Teams;
