import axios from "axios";

const api = axios.create({
  baseURL: "https://rnt9hd-8000.csb.app",
});

export default api;
