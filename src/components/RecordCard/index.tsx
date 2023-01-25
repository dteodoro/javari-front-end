import { Box, Card, Divider, Typography } from "@mui/material";

import style from "./styles.module.scss";
import { RANK_STATUS } from "../../types/constants";
import RankStatus from "../RankStatus";

interface Props {
  rank?: RANK_STATUS;
}

const RecordCard = ({ rank }: Props) => {
  return (
    <Card className={style.cardRecord__root}>
      <Box className={style.cardRecord__pointsContainer}>
        <RankStatus rankStatus={rank} />
        <Box className={style.cardRecord__points}>
          <Typography variant="h3">48</Typography>
          <Typography ml={1} mb={1} variant="subtitle2">
            Pts
          </Typography>
        </Box>
      </Box>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        className={style.cardRecord__divider}
      />
      <Box className={style.cardRecord__statistics}>
        <Box className={style.cardRecord__efficiency}>
          <Typography variant="subtitle2">Hits</Typography>
          <Typography variant="h6">25/30</Typography>
        </Box>
        <Box className={style.cardRecord__efficiency}>
          <Typography mr={1} variant="subtitle2">
            EFF
          </Typography>
          <Box className={style.cardRecord__efficiency_percents}>
            <Typography variant="h4">98</Typography>
            <Typography ml={0} mb={0.5} variant="body2">
              %
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default RecordCard;
