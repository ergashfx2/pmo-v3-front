import axios from "axios";

class AuthService {
  constructor() {
    this.apiUrl = "http://127.0.0.1:8000";
  }

  async login(username, password) {
    try {
      const response = await axios.post(`${this.apiUrl}/auth/login/`, {
        username,
        password,
      });
      if (response.data.key) {
        localStorage.setItem("authToken", response.data.key);
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async register(data) {
    try {
      const response = await axios.post(
        `${this.apiUrl}/auth/registration/`,
        data
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  }

  async logout() {
    try {
      await axios.post(`${this.apiUrl}/auth/logout/`);
      localStorage.removeItem("authToken");
    } catch (error) {
      console.error(error);
    }
  }
}

export default new AuthService();
