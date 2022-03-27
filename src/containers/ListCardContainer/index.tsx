import { Container, Divider, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React, { ReactChild, ReactNode } from "react";
import { ISmallCard } from "../../types/mini-card";
import style from "./styles.module.scss";

interface Props {
  title: string;
  children: ReactNode[];
}

const ListCardContainer = ({ title, children }: Props) => {
  return (
    <Container className={style.root}>
      <Typography className={style.listTitle} variant="h6">
        {title}
      </Typography>
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
