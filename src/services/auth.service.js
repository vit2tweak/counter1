import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

class AuthService {
  async login(username, password) {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        username,
        password
      });
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();