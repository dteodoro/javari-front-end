import axios from "axios";
import { env } from "process";

const api = axios.create({
    baseURL: "http://localhost:8082"
})

export default api;