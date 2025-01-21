import { useEffect, useState } from "react";

import style from "./styles.module.scss";
import {
  Alert,
  Avatar,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Link,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/contexts/Auth/AuthContext";
import { useBettorContext } from "../../store/contexts/Auth/BettorContext";

const Login = () => {
  const { logIn, userLogged, setLoading, onError, setOnError } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const { fetchBettor } = useBettorContext();

  const handleLogin = async () => {
    setLoading(true);
    await logIn({ email, password })
      .then((resp) => {
        if (userLogged()) {
          navigate("/home");
        }
        fetchBettor();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <Container>
      <FormGroup className={style.root}>
        <Snackbar
          open={onError}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          sx={{ marginBottom: 12 }}
          autoHideDuration={600}
        >
          <Alert
            severity="error"
            onClose={() => {
              setOnError(!onError);
            }}
          >
            Usuário ou senha inválidos!
          </Alert>
        </Snackbar>
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
          error={onError}
          onFocus={() => (onError ? setOnError(false) : () => {})}
        />
        <TextField
          fullWidth
          id="password"
          required
          type="password"
          label="Password"
          className={style.fieldText}
          error={onError}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => (onError ? setOnError(false) : () => {})}
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
        <Button
          variant="contained"
          size="large"
          className={style.buttonSignUp}
          onClick={() => navigate("/signup")}
        >
          Create New Account
        </Button> 
      </FormGroup>
    </Container>
  );
};

export default Login;
