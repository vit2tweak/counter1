const VALID_CREDENTIALS = {
  username: 'ai-gen-user',
  password: 'Pen555Bottle++'
};

export const login = async (username, password) => {
  if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
    const token = btoa(username + ':' + new Date().getTime());
    localStorage.setItem('authToken', token);
    return { success: true };
  }
  return { success: false, error: 'Invalid credentials' };
};

export const logout = () => {
  localStorage.removeItem('authToken');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};
