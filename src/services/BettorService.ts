import { API_CORE } from "../types/constants";
import { IPlayer } from "../types/player";
import { ITeam } from "../types/team";
import api from "./api";

class BettorService {
  async findBettorById(id: string | undefined): Promise<IPlayer> {
    if (id) {
      const response = await api.get(`${API_CORE}/bettor/${id}`);
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
      `${API_CORE}/bettor/${bettorId}/favoriteTeam/${teamId}`
    );
    return response.data;
  }

  async removeFavoriteTeam(
    teamId: string | undefined,
    bettorId: string | undefined
  ) {
    await api.delete(`${API_CORE}/bettor/${bettorId}/favoriteTeam/${teamId}`);
  }

  async changeBettorImage(bettorId: string, file: Blob) {
    let data = new FormData();
    data.append("file", file);
    await api.post(`${API_CORE}/bettor/${bettorId}/uploadImage`, data, {
      headers: {
        accept: "application/json",
        "Content-Type": `multipart/form-data; boundary=${file.type}`,
      },
    });
  }
}

export default BettorService;
