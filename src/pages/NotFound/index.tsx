import React from "react";
import { Container } from "@mui/material";

import style from ".styles.module.scss";
import NoContent from "../../components/NoContent";

const NotFound: React.FC = () => {
  return (
    <Container>
      <NoContent label="Page Not Found" />
    </Container>
  );
};

export default NotFound;
