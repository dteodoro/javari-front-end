import axios from "axios";

const api = axios.create({
  baseURL: "https://javari.ddns.net:8080",
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "*",
  },
});

export default api;
