import axiosService from "./axiosService";

class ProjectService {
  async getProjects() {
    try {
      const response = await axiosService.get('/projects/all/');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

}

export default new ProjectService();