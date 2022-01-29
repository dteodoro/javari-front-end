import { PropsOf } from "@emotion/react";
import { Box, ButtonGroup } from "@mui/material";
import React, { ReactNode } from "react";

import style from "./styles.module.scss";
interface Props {
  children?: ReactNode;
}
const NavigateButtons = ({ children }: Props) => {
  return (
    <Box textAlign="center">
      <ButtonGroup
        variant="contained"
        color="primary"
        disableElevation
        className={style.buttonGroup}
      >
        {children}
      </ButtonGroup>
    </Box>
  );
};

export default NavigateButtons;
