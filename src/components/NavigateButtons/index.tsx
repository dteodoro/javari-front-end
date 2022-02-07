import { Box, ButtonGroup } from "@mui/material";
import { ReactNode } from "react";

import style from "./styles.module.scss";
interface Props {
  children?: ReactNode;
  fixed?: boolean;
}
const NavigateButtons = ({ children, fixed }: Props) => {
  return (
    <Box className={`${style.root} ${fixed ? style.fixed : ""}`}>
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
