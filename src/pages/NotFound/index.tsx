import React, { useEffect } from "react";
import { Box, Button, Container } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

import style from "./styles.module.scss";
import NoContent from "../../components/NoContent";
import { useAuth } from "../../store/contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const { signOut, userLogged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    signOut();
  }, []);

  return (
    <Container>
      <Box className={style.contentButtons} mt={2}>
        <Button
          onClick={() => {
            signOut();
            navigate("/");
          }}
          variant="outlined"
          endIcon={<LoginIcon />}
        >
          Return to Login
        </Button>
      </Box>

      <NoContent label="Page Not Found" />
    </Container>
  );
};

export default NotFound;
