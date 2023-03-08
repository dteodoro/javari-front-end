import { Grid, Typography } from "@mui/material";

import { IDivision } from "../../types/division";
import TeamCard from "../../components/TeamCard";
import style from "./styles.module.scss";
import ListCardContainer from "../ListCardContainer";

interface Props {
  divisions: IDivision[];
  conference?: string;
}

const DivisionContainer = ({ divisions, conference }: Props) => {
  return (
    <Grid container spacing={2} className={style.divisionContainer}>
      {divisions.map((d) => (
        <Grid
          container
          item
          className={style.classificationContent}
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={4}
        >
          <ListCardContainer
            key={`${d.name}-${conference}`}
            title={d.name}
            subtitle={conference}
          >
            {d.teams.map((team) => (
              <TeamCard team={team} key={team.id} />
            ))}
          </ListCardContainer>
        </Grid>
      ))}
    </Grid>
  );
};

export default DivisionContainer;
