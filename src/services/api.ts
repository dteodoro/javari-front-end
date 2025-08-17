import axios from "axios";

const api = axios.create({
  baseURL: process.env.JAVARI_BACK_URL || "https://darioteodoro.dev.br",
  withCredentials: false,
});

export default api;
