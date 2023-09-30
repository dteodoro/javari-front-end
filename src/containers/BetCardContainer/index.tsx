import { Box, Grid } from "@mui/material";

import BetCard from "../../components/BetCard";
import { ISchedule } from "../../types/schedule";

interface BetCardProps {
  data?: ISchedule[];
}

const BetCardContainer: React.FC<BetCardProps> = ({ data }) => {
  return (
    <Box p={0} m={0} mb={2}>
      <Grid container spacing={2}>
        {data?.map((schedule) => (
          <Grid key={schedule.id} item xs={12} sm={6} md={6} lg={4} xl={4}>
            <BetCard schedule={schedule} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default BetCardContainer;
