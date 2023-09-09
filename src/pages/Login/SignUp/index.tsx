import React, { useState } from "react";

import style from "./styles.module.scss";
import {
  Avatar,
  Button,
  Container,
  Divider,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";

import { useAuth } from "../../../store/contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");

  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSignin = async () => {
    await signIn({ firstname, lastname, email, password });
    navigate("/");
    window.location.reload();
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
          Create Account
        </Typography>

        <TextField
          fullWidth
          id="firstname"
          label="First Name"
          type="search"
          className={style.fieldText}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField
          fullWidth
          id="lastname"
          label="Last Name"
          type="search"
          className={style.fieldText}
          onChange={(e) => setLastName(e.target.value)}
        />

        <TextField
          fullWidth
          id="username"
          label="E-mail"
          type="email"
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

        <TextField
          fullWidth
          id="passwordcheck"
          required
          type="password"
          label="Password Check"
          className={style.fieldText}
          onChange={(e) => setPasswordCheck(e.target.value)}
          error={
            password && passwordCheck && password !== passwordCheck
              ? true
              : false
          }
        />
        <Divider variant="middle" />
        <Button
          variant="contained"
          size="large"
          className={style.buttonSignUp}
          onClick={handleSignin}
        >
          Create New Account
        </Button>
      </FormGroup>
    </Container>
  );
};

export default SignUp;
