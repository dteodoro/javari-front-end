import { Card, CardContent, CardMedia, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";
import EditIcon from "@mui/icons-material/Edit";

import style from "./styles.module.scss";

interface Props {
  children?: ReactNode;
  mainImage?: string;
  backgroundImage?: string;
  editable?: boolean;
  teamColor?: string;
  alternativeColor?: string;
}

const TeamHero = (props: Props) => {
  return (
    <Card
      elevation={2}
      className={style.root}
      style={{
        background: `linear-gradient(120deg,transparent 61%, #${props.teamColor}3D 62%, #${props.alternativeColor} 63%`,
      }}
    >
      <Box className={style.teamInfo}>
        <CardContent>{props.children}</CardContent>
        {props.mainImage && (
          <Box className={style.logoContainer}>
            <CardMedia
              component="img"
              image={props.mainImage}
              alt="Live from space album cover"
              className={style.teamLogo}
              style={props.editable ? { borderRadius: "50%" } : {}}
            />
            {props.editable && (
              <IconButton className={style.editButton}>
                <EditIcon />
              </IconButton>
            )}
          </Box>
        )}
      </Box>
      <Box>
        <img
          src={props.backgroundImage}
          className={style.backgroundLogo}
          alt="team logo as background"
        ></img>
      </Box>
    </Card>
  );
};
export default TeamHero;
