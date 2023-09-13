import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_API,
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "*",
  },
});

export default api;
