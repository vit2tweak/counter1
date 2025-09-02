import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem('userSession', JSON.stringify({ user: userData, token: authToken }));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('userSession');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
