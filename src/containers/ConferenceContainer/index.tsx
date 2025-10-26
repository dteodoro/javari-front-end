import { Grid } from "@mui/material";

import { IDivision } from "../../types/division";
import TeamCard from "../../components/TeamCard";
import style from "./styles.module.scss";
import ListCardContainer from "../ListCardContainer";
import { IConference } from "../../types/conference";

interface Props {
  conferences: IConference[];
}

const ConferenceContainer = ({ conferences }: Props) => {
  return (
    <Grid
      container
      spacing={4}
      className={style.divisionContainer}
      key={`all-conference-grid`}
    >
      {conferences.map((conf) => (
        <Grid
          container
          item
          className={style.classificationContent}
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          key={`${conf.name}-grid`}
        >
          <ListCardContainer
            key={`${conf.name}`}
            title={conf.name}
          >
            {conf.divisions.flatMap((d) => d.teams)
              .slice()
              .sort((a, b) => {
                const wpDiff =
                  (b.scoreWinPercentage ?? -Infinity) -
                  (a.scoreWinPercentage ?? -Infinity);
                if (wpDiff !== 0) return wpDiff;
                return (b.scoreWinConfPercentage ?? -Infinity) -(a.scoreWinConfPercentage ?? -Infinity);
              }).map((team) => (
              <TeamCard team={team} key={team.id} editable={true}/>
            ))}
          </ListCardContainer>
        </Grid>
      ))}
    </Grid>
  );
};

export default ConferenceContainer;
