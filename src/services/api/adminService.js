import axiosService from "./axiosService";

class AdminService {
  async getUsers() {
    try {
      const response = await axiosService.get("/profile/all/");
      return response.data;
    } catch (error) {}
  }

  async performAction(action, user_id) {
    try {
      const response = await axiosService.patch(
        `/profile/${action}/${user_id}`
      );
      return response.data;
    } catch (e) {}
  }
}

export default new AdminService();
