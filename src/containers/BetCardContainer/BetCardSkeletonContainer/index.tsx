import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";
import style from "./styles.module.scss";
import uuid from "react-uuid";

const BetCardSkeletonContainer: React.FC = () => {
  const skeletonQtd = 3;
  return (
    <Box p={0} m={0}>
      <Grid container spacing={2}>
        {Array(skeletonQtd)
          .fill(0)
          .map((s) => (
            <Grid key={uuid()} item xs={12} sm={6} md={6} lg={4} xl={4} mb={2}>
              <Skeleton key={uuid()} variant="rectangular" width="100%">
                <div className={style.skeleton_card} />
              </Skeleton>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default BetCardSkeletonContainer;
