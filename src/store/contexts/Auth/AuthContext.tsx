import { createContext, useCallback, useContext, useState } from "react";
import api from "../../../services/api";
import { RANK_STATUS } from "../../../types/constants";
import { IPlayer } from "../../../types/player";

const mockUser: IPlayer = {
  id: "0c32db66-86d7-11ed-a1eb-0242ac120002",
  name: "Dario",
  slug: "dario",
  fullName: "Dario Teodoro",
  points: 48,
  position: 1,
  rankStatus: RANK_STATUS.UP,
  favoriteTeam: {
    id: 1,
    logo: "/nfl.svg",
    name: "Raiders",
    shortDisplayName: "Las Vegas",
    displayName: "Las Vegas Raiders",
    abbreviation: "LV",
    scoreSummary: "(2-3-1)",
  },
  bets: [],
};

interface AuthContextState {
  token?: TokenState;
  signIn({ username, password }: UserData): Promise<void>;
  signOut(): void;
  userLogged(): boolean;
  user?: IPlayer;
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
  const [user, setUser] = useState<IPlayer>({} as IPlayer);
  const [token, setToken] = useState<TokenState | undefined>(() => {
    const token = localStorage.getItem("@PermissionYT:token");

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token };
    }

    return {} as TokenState;
  });

  const signIn = useCallback(async ({ username, password }: UserData) => {
    const response = await api.post("/sessions", {
      username,
      password,
    });

    const { token, userLogged } = response.data;

    if (userLogged) {
      setToken(token);
      setUser(mockUser);

      localStorage.setItem("@PermissionYT:token", token);
      api.defaults.headers.authorization = `Bearer ${token}`;
    }
  }, []);

  const signOut = useCallback(async () => {
    if (user) {
      setUser({} as IPlayer);
      setToken(undefined);
      localStorage.removeItem("@PermissionYT:token");
    }
  }, [user]);

  const userLogged = useCallback(() => {
    const token = localStorage.getItem("@PermissionYT:token");
    if (token) {
      return true;
    }
    return false;
  }, []);

  return (
    <AuthContext.Provider value={{ token, signIn, signOut, userLogged, user }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextState {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
