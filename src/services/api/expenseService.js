import axiosService from "./axiosService";

class ExpenseService {
  async getExpenses() {
    try {
      const response = await axiosService.get('/expenses/all/');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

}

export default new ExpenseService();