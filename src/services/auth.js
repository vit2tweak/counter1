const VALID_CREDENTIALS = {
  username: 'ai-gen-user',
  password: 'Pen555Bottle++'
};

export const login = async (username, password) => {
  if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
    const token = btoa(JSON.stringify({ username, timestamp: Date.now() }));
    localStorage.setItem('authToken', token);
    return { success: true };
  }
  return { success: false, error: 'Invalid credentials' };
};

export const logout = () => {
  localStorage.removeItem('authToken');
};

export const checkAuth = () => {
  const token = localStorage.getItem('authToken');
  if (!token) return false;
  try {
    const decoded = JSON.parse(atob(token));
    return decoded.username === VALID_CREDENTIALS.username;
  } catch {
    return false;
  }
};