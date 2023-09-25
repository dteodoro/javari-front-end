import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../../services/api";
import { API_AUTH, API_CORE } from "../../../types/constants";
import { ITeam } from "../../../types/team";

interface BettorContextState {
  updateBetsOpen: () => void;
  betsOpen: number;
  bettor?: IBettor;
  fetchBettor(): void;
  favoriteTeam?: ITeam;
  setFavoriteTeam: React.Dispatch<React.SetStateAction<ITeam>>;
}

interface IBettor {
  userName: string;
  userId: string;
}

const BettorContext = createContext<BettorContextState>(
  {} as BettorContextState
);

const BettorProvider: React.FC = ({ children }) => {
  let currentUser = localStorage.getItem("javari-bettor");
  const [bettor, setBettor] = useState<IBettor>(
    currentUser ? JSON.parse(currentUser) : ({} as IBettor)
  );
  const [favoriteTeam, setFavoriteTeam] = useState<ITeam>({} as ITeam);
  const [betsOpen, setBetsOpen] = useState(0);

  const fetchBettor = useCallback(async () => {
    await api.post(`${API_AUTH}/validate-token`).then((resp) => {
      const { username: userName, id: userId } = resp?.data;
      if (userName) {
        localStorage.setItem(
          "javari-bettor",
          JSON.stringify({ userName, userId } as IBettor)
        );
        setBettor({ userName, userId });
      }
    });
  }, []);

  const updateBetsOpen = async () => {
    await api
      .get(`${API_CORE}/schedules/bettor/${bettor.userId}`)
      .then((resp) => setBetsOpen(resp.data));
  };

  useEffect(() => {
    const fetchData = async () => {
      await api
        .get(`${API_CORE}/schedules/bettor/${bettor.userId}`)
        .then((resp) => setBetsOpen(resp.data));
      await api
        .get(`${API_CORE}/bettor/${bettor.userId}/favoriteTeam`)
        .then((resp) => setFavoriteTeam(resp.data));
    };
    fetchData();
  }, [bettor]);

  return (
    <BettorContext.Provider
      value={{
        updateBetsOpen,
        betsOpen,
        bettor,
        favoriteTeam,
        fetchBettor,
        setFavoriteTeam,
      }}
    >
      {children}
    </BettorContext.Provider>
  );
};

function useBettorContext(): BettorContextState {
  const context = useContext(BettorContext);
  return context;
}

export { BettorProvider, useBettorContext };
