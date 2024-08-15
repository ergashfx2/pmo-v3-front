import axiosService from "./axiosService";

class UserService {
  async getMe() {
    try {
      const response = await axiosService.get('/profile/my-profile/');
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error.response.data);
      throw error.response.data;
    }
  }
}

export default new UserService();
