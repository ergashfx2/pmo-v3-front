import axios from 'axios';

class AuthService {
  constructor() {
    this.apiUrl = 'https://ergashfx2-pmo-v3-eca4.twc1.net/';
  }


  async login(username, password) {
    try {
      const response = await axios.post(`${this.apiUrl}/auth/login/`, {
        username,
        password,
      });
      if (response.data.key) {
        localStorage.setItem('authToken', response.data.key);
      }
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }


  async register(username, email, password1, password2) {
    try {
      const response = await axios.post(`${this.apiUrl}/auth/registration/`, {
        username,
        email,
        password1,
        password2,
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async logout() {
    try {
      await axios.post(`${this.apiUrl}/auth/logout/`);
      localStorage.removeItem('authToken');
    } catch (error) {
      throw error.response.data;
    }
  }
}

export default new AuthService();
