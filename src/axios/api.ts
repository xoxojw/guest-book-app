import axios from "axios";

export const BASE_URL = "http://localhost:4000";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export default instance;