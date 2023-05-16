import React, { useCallback, useEffect, useState } from "react";

import style from "./styles.module.scss";
import {
  Avatar,
  Button,
  ButtonGroup,
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
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const { logIn, signIn, userLogged } = useAuth();

  const handleSignin = async () => {
    await signIn({ email, password });
    if (userLogged()) {
      navigate("/home");
    }
  };

  const handleLogin = async () => {
    await logIn({ email, password });
    if (userLogged()) {
      navigate("/home");
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
          onChange={(e) => setEmail(e.target.value)}
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
        <ButtonGroup orientation="horizontal">
          <Button
            variant="contained"
            size="large"
            className={style.buttonLogin}
            onClick={handleSignin}
          >
            SIGN UP
          </Button>
          <Button
            variant="contained"
            size="large"
            className={style.buttonLogin}
            onClick={handleLogin}
          >
            LOGIN
          </Button>
        </ButtonGroup>
        <Link variant="body2" mt={2} href="#">
          Forgot password ?
        </Link>
      </FormGroup>
    </Container>
  );
};

export default Login;
