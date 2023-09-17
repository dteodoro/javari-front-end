import {
  Avatar as AvatarMU,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import ImageIcon from "@mui/icons-material/Image";
import RefreshIcon from "@mui/icons-material/Refresh";

import style from "./styles.module.scss";
import AvatarEditorModal from "../AvatarEditorModal";

interface Props {
  children?: ReactNode;
  mainImage?: string;
  backgroundImage?: string;
  editable?: boolean;
  teamColor?: string;
  alternativeColor?: string;
}

const TeamHero = (props: Props) => {
  const [logoEdit, setLogoEdit] = useState(false);

  const handleClickEdit = () => {
    setLogoEdit(!logoEdit);
  };

  const handleRefresh = () => {
    setLogoEdit(!logoEdit);
    window.location.reload();
  };

  return (
    <Card
      elevation={2}
      className={style.root}
      style={{
        background: `linear-gradient(120deg,transparent 61%, #${props.teamColor}3D 62%, #${props.alternativeColor} 63%`,
      }}
    >
      {logoEdit && (
        <AvatarEditorModal
          mainImage={props.mainImage ? props.mainImage : "/avatar.svg"}
        />
      )}
      <Box className={style.teamInfo}>
        <CardContent>{props.children}</CardContent>

        <Box className={style.logoContainer}>
          <AvatarMU
            src={props.mainImage}
            sx={{
              width: 130,
              height: 130,
            }}
          >
            <ImageIcon />
          </AvatarMU>
          {props.editable && (
            <>
              {logoEdit ? (
                <IconButton
                  className={style.editButton}
                  onClick={handleRefresh}
                >
                  <RefreshIcon />
                </IconButton>
              ) : (
                <IconButton
                  className={style.editButton}
                  onClick={handleClickEdit}
                >
                  <EditIcon />
                </IconButton>
              )}
            </>
          )}
        </Box>
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
