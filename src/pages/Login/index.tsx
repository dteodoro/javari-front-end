import React from "react";

import style from "./styles.module.scss";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { start } from "repl";

const Login = () => {
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
        />
        <TextField
          fullWidth
          id="password"
          required
          type="password"
          label="Password"
          className={style.fieldText}
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
