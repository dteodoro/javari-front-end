import { Box, Grid } from "@mui/material";
import React from "react";
import PlayerCard from "../../components/PlayerCard";
import { IPlayer } from "../../types/player";

import style from "./styles.module.scss";

interface Props {
  players: IPlayer[];
}

const RankContainer = ({ players }: Props) => {
  return (
    <Box p={0} m={0} pb={2}>
      <Grid
        container
        spacing={0.5}
        flexWrap={"nowrap"}
        flexDirection={"column"}
      >
        {players.map((player) => (
          <Grid key={player.id} item>
            <PlayerCard player={player} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RankContainer;
