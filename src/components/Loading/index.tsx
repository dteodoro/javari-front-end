import style from "./styles.module.scss";
import { Box, Fade } from "@mui/material";

interface Props {
  onLoading: boolean;
}

const Loading = ({ onLoading }: Props) => {
  return (
    <Box className={style.loadingContainer}>
      <Fade in={onLoading}>
        <img src="/javari-loading.gif"></img>
      </Fade>
    </Box>
  );
};

export default Loading;
