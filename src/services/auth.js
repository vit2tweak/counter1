export const authService = {
  login: async (credentials) => {
    // Mock authentication - replace with actual API call
    if (credentials.username === 'demo' && credentials.password === 'demo') {
      return {
        token: 'mock-jwt-token',
        user: { id: 1, username: credentials.username }
      };
    }
    throw new Error('Invalid credentials');
  },

  validateToken: async (token) => {
    // Mock token validation - replace with actual API call
    if (token === 'mock-jwt-token') {
      return { id: 1, username: 'demo' };
    }
    throw new Error('Invalid token');
  }
};
