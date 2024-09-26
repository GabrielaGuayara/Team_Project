import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedRole = localStorage.getItem("role");
    const savedUserId = localStorage.getItem("userId");
    if (savedToken && savedRole && savedUserId) {
      setToken(savedToken);
      setRole(savedRole);
      setUserId(savedUserId);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (userToken, userRole, userId) => {
    localStorage.setItem("token", userToken);
    localStorage.setItem("role", userRole);
    localStorage.setItem("userId", userId);
    setToken(userToken);
    setRole(userRole);
    setUserId(userId);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    setToken(null);
    setRole(null);
    setUserId(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, role, userId, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
