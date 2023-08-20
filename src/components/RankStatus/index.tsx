import { Box } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import style from "./styles.module.scss";

interface Props {
  rank: number;
}

const RankStatus = ({ rank }: Props) => {
  return (
    <Box className={style.cardRecord__rankIcon}>
      {rank > 0 && (
        <ArrowCircleUpIcon color="success" sx={{ marginTop: "12px" }} />
      )}
      {rank < 0 && (
        <ArrowCircleDownIcon color="error" sx={{ marginTop: "12px" }} />
      )}
      {rank === 0 && (
        <RemoveCircleOutlineIcon color="secondary" sx={{ marginTop: "12px" }} />
      )}
    </Box>
  );
};

export default RankStatus;
