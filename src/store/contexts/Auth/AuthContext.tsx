import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../../services/api";
import { ITeam } from "../../../types/team";
import { API_AUTH, API_CORE } from "../../../types/constants";

interface IBettor {
  userName: string;
  userId: string;
}

interface AuthContextState {
  token?: TokenState;
  logIn({ email, password }: UserData): Promise<void>;
  signIn({ email, password }: UserData): Promise<void>;
  signOut(): void;
  userLogged(): boolean;
  bettor?: IBettor;
  favoriteTeam?: ITeam;
  setFavoriteTeam: React.Dispatch<React.SetStateAction<ITeam>>;
}

interface UserData {
  email: string;
  password: string;
}

interface TokenState {
  accessToken: string;
  refreshToken: string;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({ children }) => {
  const [bettor, setBettor] = useState<IBettor>({} as IBettor);
  const [favoriteTeam, setFavoriteTeam] = useState<ITeam>({} as ITeam);
  const [token, setToken] = useState<TokenState | undefined>(() => {
    const accessToken = localStorage.getItem("@PermissionYT:accessToken");
    const refreshToken = localStorage.getItem("@PermissionYT:refreshToken");

    if (accessToken) {
      api.defaults.headers.authorization = `Bearer ${token}`;

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

    let responseUser;
    if (access_token && refresh_token) {
      setToken(access_token);
      localStorage.setItem("@PermissionYT:token", access_token);
      api.defaults.headers.authorization = `Bearer ${access_token}`;
      responseUser = await api.post(`${API_AUTH}/validate-token`);
    }

    const { username: userName, id: userId } = responseUser?.data;

    if (userName) {
      setBettor({ userName, userId } as IBettor);
    }
  }, []);

  const signIn = useCallback(async ({ email, password }: UserData) => {
    const response = await api.post(`${API_AUTH}/signIn`, {
      email,
      password,
    });

    const { token, userLogged, userName, userId } = response.data;

    if (userLogged) {
      setToken(token);
      setBettor({ userName, userId });

      localStorage.setItem("@PermissionYT:token", token);
      api.defaults.headers.authorization = `Bearer ${token}`;
    }
  }, []);

  const signOut = useCallback(async () => {
    if (setBettor) {
      setBettor({} as IBettor);
      setToken(undefined);
      localStorage.removeItem("@PermissionYT:token");
    }
  }, [setBettor]);

  const userLogged = useCallback(() => {
    const token = localStorage.getItem("@PermissionYT:token");
    if (token) {
      return true;
    }
    return false;
  }, []);

  useEffect(() => {
    const fetchFavorite = async () => {
      const team = await api.get(
        `${API_CORE}/bettor/${bettor.userId}/favoriteTeam`
      );
      setFavoriteTeam(team.data);
    };
    if (bettor.userId) {
      fetchFavorite();
    }
  }, [bettor]);

  return (
    <AuthContext.Provider
      value={{
        token,
        logIn,
        signIn,
        signOut,
        userLogged,
        bettor,
        favoriteTeam,
        setFavoriteTeam,
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
