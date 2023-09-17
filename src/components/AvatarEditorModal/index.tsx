import { Avatar, Box, Button, Dialog, IconButton, Slider } from "@mui/material";
import { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import ImageIcon from "@mui/icons-material/Image";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";

import style from "./styles.module.scss";
import BettorService from "../../services/BettorService";
import { useAuth } from "../../store/contexts/Auth/AuthContext";

interface Props {
  mainImage: string;
}

interface ImageProperties {
  originalImage: string;
  croppedImage: string | undefined;
  position: { x: number; y: number };
  scale: number;
}

const AvatarEditorModal = (props: Props) => {
  const { bettor } = useAuth();
  const currentImage = props.mainImage;
  const [fileBlob, setFileBlob] = useState<Blob | null>(null);
  const [open, setOpen] = useState(true);
  const [file, setFile] = useState(false);
  const [fileSaved, setFileSaved] = useState(false);
  const [imageProperties, setImageProperties] = useState<ImageProperties>({
    originalImage: currentImage,
    croppedImage: undefined,
    position: { x: 0.5, y: 0.5 },
    scale: 1,
  });
  const { originalImage, position, scale } = imageProperties;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const editorRef = useRef<AvatarEditor | null>(null);

  const handleAdd = (event: React.ChangeEvent<any>) => {
    setImageProperties({
      ...imageProperties,
      originalImage: event.target.files[0],
    });
    setFile(true);
  };

  const handleZoom = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      const scale = newValue;
      setImageProperties({ ...imageProperties, scale });
    }
  };

  const handlePositionChange = (position: ImageProperties["position"]) => {
    setImageProperties({ ...imageProperties, position });
  };

  const handleCropped = (event: React.FormEvent) => {
    event.preventDefault();
    if (editorRef?.current) {
      const canvasScaled: HTMLCanvasElement =
        editorRef.current.getImageScaledToCanvas();
      fetch(canvasScaled.toDataURL())
        .then((res) => res.blob())
        .then((blob) => {
          setImageProperties({
            ...imageProperties,
            croppedImage: window.URL.createObjectURL(blob),
          });
          setFileBlob(blob);
        });
      setFileSaved(true);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleCancel = () => {
    setFile(false);
    setImageProperties({
      ...imageProperties,
      originalImage: currentImage,
      scale: 1,
    });
  };

  const handleSubmitImage = () => {
    if (bettor?.userId && fileBlob) {
      const service = new BettorService();
      service.changeBettorImage(bettor.userId, fileBlob).then(() => {
        setOpen(false);
      });
    }
  };

  return (
    <Dialog open={open} fullWidth onClick={(e) => e.preventDefault}>
      <Box className={style.logoContainerEdit}>
        {fileSaved ? (
          <Box>
            <Avatar
              src={imageProperties.croppedImage}
              className={style.avatarCropped}
            >
              <ImageIcon />
            </Avatar>
          </Box>
        ) : (
          <>
            <AvatarEditor
              ref={editorRef}
              image={originalImage}
              color={[255, 255, 255, 0.6]}
              rotate={0}
              borderRadius={150}
              className={style.avatarEditor}
              scale={scale}
              position={position}
              onPositionChange={handlePositionChange}
            >
              <ImageIcon />
            </AvatarEditor>
            {file && (
              <Slider
                aria-label="raceSlider"
                value={imageProperties.scale}
                min={1}
                max={10}
                step={0.1}
                className={style.slideAvatar}
                defaultValue={2}
                onChange={handleZoom}
              />
            )}
          </>
        )}
      </Box>
      <Box className={style.actionButtons}>
        {fileSaved ? (
          <Box className={style.confirmButtons}>
            <IconButton
              className={style.cancel}
              onClick={() => setFileSaved(false)}
            >
              <CloseIcon />
            </IconButton>
            <IconButton className={style.done} onClick={handleSubmitImage}>
              <DoneIcon />
            </IconButton>
          </Box>
        ) : (
          <>
            {file ? (
              <>
                <Button
                  sx={{ marginBottom: 2 }}
                  variant="outlined"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button
                  sx={{ marginLeft: 2, marginBottom: 2 }}
                  variant="outlined"
                  onClick={handleCropped}
                >
                  Save
                </Button>
              </>
            ) : (
              <>
                <IconButton
                  className={style.closeButton}
                  onClick={() => setOpen(false)}
                >
                  <CloseIcon />
                </IconButton>
                <Button
                  sx={{ marginBottom: 2 }}
                  onClick={handleClick}
                  variant="outlined"
                >
                  Change Image
                  <input
                    type="file"
                    className={style.inputFile}
                    hidden
                    ref={inputRef}
                    onChange={handleAdd}
                  />
                </Button>
              </>
            )}
          </>
        )}
      </Box>
    </Dialog>
  );
};

export default AvatarEditorModal;
