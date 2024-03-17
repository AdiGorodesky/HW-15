import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { storageService } from "../../services/storageService";
import { userService } from "../../services/userService";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const existUser = storageService.getLoggedInUser();
    if (existUser) {
      setUser(existUser);
    }
  }, []);

  const handleRegister = (newUser) => {
    const res = userService.createUser(newUser);
    if (!res) return;
    navigate("/login");
  };

  const handleLogin = (username, password) => {
    const loggedUser = userService.login(username, password);

    if (!loggedUser) {
      return null;
    }
    setUser(loggedUser);

    navigate("/students");
    return true;
  };

  const handleLogout = () => {
    userService.logout();
    setUser(null);
    navigate("/login");
  };

  const value = { handleRegister, handleLogin, handleLogout, user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;

export const useUser = () => useContext(AuthContext);
