import axiosService from "./axiosService";

class UserService {
  async getMe() {
    try {
      const response = await axiosService.get("/auth/user/");
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async getMyProfile() {
    try {
      const response = await axiosService.get("/profile/my-profile/");
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async updateMyProfile(data) {
    try {
      const response = await axiosService.patch(
        "/profile/my-profile/update",
        data
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
}

export default UserService = new UserService();
