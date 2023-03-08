import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React, { ReactChild, ReactNode } from "react";
import style from "./styles.module.scss";

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode[];
}

const ListCardContainer = ({ title, subtitle, children }: Props) => {
  return (
    <Container className={style.root}>
      <Box className={style.titleContainer}>
        <Typography className={style.listTitle} variant="h6">
          {title}
        </Typography>
        {subtitle && (
          <Typography className={style.listSubtitle} variant="h6">
            {subtitle}
          </Typography>
        )}
      </Box>
      <Divider />
      <Grid
        container
        spacing={0.5}
        flexWrap={"nowrap"}
        flexDirection={"column"}
      >
        {children.map((child: ReactNode, index) => (
          <Grid key={index} item className={style.cardItem}>
            {child}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ListCardContainer;
