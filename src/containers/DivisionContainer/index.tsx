import { Grid, Typography } from "@mui/material";

import { IDivision } from "../../types/division";
import TeamCard from "../../components/TeamCard";
import style from "./styles.module.scss";

interface Props {
  divisions: IDivision[];
}

const DivisionContainer = ({ divisions }: Props) => {
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
    </Grid>
  );
};

export default DivisionContainer;
