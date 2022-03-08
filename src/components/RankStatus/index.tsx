import { Box } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import { RANK_STATUS } from "../../types/constants";
import style from "./styles.module.scss";

interface Props {
  rankStatus?: RANK_STATUS;
}

const RankStatus = ({ rankStatus }: Props) => {
  return (
    <Box className={style.cardRecord__rankIcon}>
      {rankStatus === RANK_STATUS.UP && (
        <ArrowCircleUpIcon color="success" sx={{ marginTop: "12px" }} />
      )}
      {rankStatus === RANK_STATUS.DOWN && (
        <ArrowCircleDownIcon color="error" sx={{ marginTop: "12px" }} />
      )}
      {rankStatus === RANK_STATUS.NO_CHANGE && (
        <RemoveCircleOutlineIcon color="secondary" sx={{ marginTop: "12px" }} />
      )}
    </Box>
  );
};

export default RankStatus;
