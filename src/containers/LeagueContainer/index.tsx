import { Grid } from "@mui/material";

import TeamCard from "../../components/TeamCard";
import style from "./styles.module.scss";
import ListCardContainer from "../ListCardContainer";
import { IConference } from "../../types/conference";

interface Props {
  conferences: IConference[];
}

const LeagueContainer = ({ conferences }: Props) => {
  return (
    <Grid
      container
      spacing={4}
      className={style.divisionContainer}
      key={`all-league-grid`}
    >
      <Grid
        container
        item
        className={style.classificationContent}
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        key={`league-grid`}
      >
        <ListCardContainer
          key={`league`}
          title="LEAGUE"
        >
          {conferences.flatMap((conf) => conf.divisions.flatMap((d) => d.teams))
            .slice()
            .sort((a, b) => {
              const diff = (b.scoreWinPercentage ?? -Infinity) -
              (a.scoreWinPercentage ?? -Infinity);
              if (diff !== 0) return diff;
              return (b.scoreStrengthOfVictory ?? -Infinity) - (a.scoreStrengthOfVictory ?? -Infinity);
            }).map((team) => (
            <TeamCard team={team} key={team.id} editable={true}/>
          ))}
        </ListCardContainer>
      </Grid>
    </Grid>
  );
};

export default LeagueContainer;
