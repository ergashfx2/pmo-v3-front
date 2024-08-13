import axios from "axios";

const api = axios.create({
  baseURL: "https://lh3dp2-8000.csb.app",
});

export default api;
