import { IPlayer } from "../types/player";
import { ITeam } from "../types/team";
import api from "./api";

class BettorService {
  async findBettorById(id: string | undefined): Promise<IPlayer> {
    if (id) {
      const response = await api.get(`/bettor/${id}`);
      return response.data;
    }
    return Promise.resolve({} as IPlayer);
  }

  async setFavoriteTeam(
    teamId: string | undefined,
    bettorId: string | undefined
  ): Promise<ITeam> {
    if (!bettorId) {
      return Promise.resolve({} as ITeam);
    }
    const response = await api.post(
      `/bettor/${bettorId}/favoriteTeam/${teamId}`
    );
    return response.data;
  }

  async removeFavoriteTeam(
    teamId: string | undefined,
    bettorId: string | undefined
  ) {
    await api.delete(`/bettor/${bettorId}/favoriteTeam/${teamId}`);
  }
}

export default BettorService;