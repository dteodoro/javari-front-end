import axios from "axios";
import { env } from "process";

const api = axios.create({
    baseURL: "http://localhost:8082",
    withCredentials: false,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})

export default api;