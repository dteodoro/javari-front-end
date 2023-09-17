import { useState } from "react";

import style from "./styles.module.scss";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/contexts/Auth/AuthContext";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const { logIn, userLogged } = useAuth();

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
          Sign in
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
        <Button
          variant="contained"
          size="large"
          className={style.buttonLogin}
          onClick={handleLogin}
        >
          LOG IN
        </Button>

        <Link variant="body2" mt={2} mb={2} href="#">
          Forgot password ?
        </Link>
        <Divider variant="middle" />
        {/*         <Button
          variant="contained"
          size="large"
          className={style.buttonSignUp}
          onClick={() => navigate("/signup")}
        >
          Create New Account
        </Button> */}
      </FormGroup>
    </Container>
  );
};

export default Login;
