import { Box, Card, Grid, Skeleton } from "@mui/material";
import React from "react";
import BetCard from "../../../components/BetCard";
import style from "./styles.module.scss";

const BetCardSkeletonContainer: React.FC = () => {
  const skeletonQtd = 3;
  return (
    <Box p={0} m={0}>
      <Grid container spacing={2}>
        {Array(skeletonQtd)
          .fill(0)
          .map((i) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4} mb={2}>
              <Skeleton key={i} variant="rectangular" width="100%">
                <div className={style.skeleton_card} />
              </Skeleton>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default BetCardSkeletonContainer;
