import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../../services/api";
import { ITeam } from "../../../types/team";

interface IBettor {
  userName: string;
  userId: string;
}

interface AuthContextState {
  token?: TokenState;
  logIn({ username, password }: UserData): Promise<void>;
  signIn({ username, password }: UserData): Promise<void>;
  signOut(): void;
  userLogged(): boolean;
  bettor?: IBettor;
  favoriteTeam?: ITeam;
  setFavoriteTeam: React.Dispatch<React.SetStateAction<ITeam>>;
}

interface UserData {
  username: string;
  password: string;
}

interface TokenState {
  token: string;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({ children }) => {
  const [bettor, setBettor] = useState<IBettor>({} as IBettor);
  const [favoriteTeam, setFavoriteTeam] = useState<ITeam>({} as ITeam);
  const [token, setToken] = useState<TokenState | undefined>(() => {
    const token = localStorage.getItem("@PermissionYT:token");

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token };
    }

    return {} as TokenState;
  });

  const logIn = useCallback(async ({ username, password }: UserData) => {
    const response = await api.post("/auth/login", {
      username,
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

  const signIn = useCallback(async ({ username, password }: UserData) => {
    const response = await api.post("/auth/signIn", {
      username,
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
      const team = await api.get(`/bettor/${bettor.userId}/favoriteTeam`);
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
