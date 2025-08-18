import Box from "@mui/material/Box";
import style from "./styles.module.scss";

interface Props {
  label: string;
}
const NoContent = ({ label }: Props) => {
  return (
    <Box>
      <figure className={style.figure}>
        <figcaption className={style.figcaption}>{label}</figcaption>
        <img src="/nfl/404.png" className={style.notfound} alt={label}></img>
      </figure>
    </Box>
  );
};
export default NoContent;
