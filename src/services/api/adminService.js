import axiosService from "./axiosService";

class AdminService {
  async getUsers() {
    try {
      const response = await axiosService.get("/profile/all/");
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
}

export default new AdminService();
