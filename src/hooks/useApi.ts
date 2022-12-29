import axios from 'axios';
import { IBetting } from '../types/betting';
import { BET, RANK_STATUS } from '../types/constants';
import { IPlayer } from '../types/player';

const mockUser:IPlayer = {
        id: '33a5a417-a6bb-4d4d-9ec1-47ffa1ef7ada',
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
}

const api = axios.create({
    baseURL: "http://localhost:8082"
})

export const useApi = ()=> ({
    validateToken:async (token:string)=>{
        const response = await api.post("/validate",{token});
        return response.data
    },
    signin:async (email:string,password:string) => {
        return {
            user: mockUser,
            token: '123456789'
        };
        const response  = await api.post("/signin",{email, password});
        return response.data;
    },
    logout:async()=>{
        const response = await api.post("/logout");
        return response.data;
    }
})