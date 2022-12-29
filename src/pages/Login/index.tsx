import React, { useCallback, useEffect, useState } from "react";

import style from "./styles.module.scss";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/contexts/Auth/AuthContext";
import Home from "../Home";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const { signIn, userLogged } = useAuth();

  const handleSubmit = async () => {
    await signIn({ username, password });
    if (userLogged()) {
      navigate("/home", { replace: true });
    }
  };

  return (
    <Container>
      <FormGroup className={style.root}>
        <Avatar
          alt="Remy Sharp"
          src="/login-avatar.svg"
          sx={{ width: 60, height: 60 }}
        />
        <Typography variant="h6" mb={2} mt={2}>
          Sing in
        </Typography>

        <TextField
          fullWidth
          id="username"
          label="User Name"
          type="search"
          className={style.fieldText}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          id="password"
          required
          type="password"
          label="Password"
          className={style.fieldText}
          onChange={(e) => setPassword(e.target.value)}
        />

        <FormControlLabel
          control={<Checkbox />}
          label="Remember-me"
          className={style.checkBox}
        />
        <Button
          fullWidth
          variant="contained"
          size="large"
          className={style.buttonLogin}
          onClick={handleSubmit}
        >
          SING IN
        </Button>
        <Link variant="body2" mt={2} href="#">
          Forgot password ?
        </Link>
      </FormGroup>
    </Container>
  );
};

export default Login;
