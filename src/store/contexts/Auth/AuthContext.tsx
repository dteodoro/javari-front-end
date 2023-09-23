import { createContext, useCallback, useContext, useState } from "react";
import api from "../../../services/api";
import { API_AUTH } from "../../../types/constants";

interface AuthContextState {
  token?: TokenState;
  logIn({ email, password }: UserData): Promise<void>;
  signIn({ email, password }: UserData): Promise<void>;
  signOut(): void;
  userLogged(): boolean;
}

interface UserData {
  firstname?: string;
  lastname?: string;
  email: string;
  password: string;
}

interface TokenState {
  accessToken: string;
  refreshToken: string;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<TokenState | undefined>(() => {
    const accessToken = localStorage.getItem("@PermissionYT:accessToken");
    const refreshToken = localStorage.getItem("@PermissionYT:refreshToken");

    if (accessToken) {
      api.defaults.headers.authorization = `Bearer ${accessToken}`;
      return { accessToken, refreshToken } as TokenState;
    }

    return {} as TokenState;
  });

  const logIn = useCallback(async ({ email, password }: UserData) => {
    const responseAuth = await api.post(`${API_AUTH}/authenticate`, {
      email,
      password,
    });
    const { access_token, refresh_token } = responseAuth.data;

    if (access_token && refresh_token) {
      setToken(access_token);
      localStorage.setItem("@PermissionYT:accessToken", access_token);
      api.defaults.headers.authorization = `Bearer ${access_token}`;
    }
  }, []);

  const signIn = useCallback(
    async ({ firstname, lastname, email, password }: UserData) => {
      const response = await api.post(`${API_AUTH}/register`, {
        firstname,
        lastname,
        email,
        password,
      });

      const { token, userLogged, userName, userId } = response.data;

      if (userLogged) {
        setToken(token);
        localStorage.setItem("@PermissionYT:accessToken", token);
        localStorage.setItem(
          "javari-bettor",
          JSON.stringify({ userName, userId })
        );
        api.defaults.headers.authorization = `Bearer ${token}`;
      }
    },
    []
  );

  const signOut = useCallback(async () => {
    setToken(undefined);
    localStorage.removeItem("@PermissionYT:accessToken");
    localStorage.removeItem("javari-bettor");
  }, []);

  const userLogged = useCallback(() => {
    const token = localStorage.getItem("@PermissionYT:accessToken");
    if (token) {
      return true;
    }
    return false;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        logIn,
        signIn,
        signOut,
        userLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextState {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
