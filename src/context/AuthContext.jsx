import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/apiConfige";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const checkLoing = async () => {
    const apiResponse = await axios.get("/auth/is-auth");
    setUser(apiResponse.data.user || null);
    console.log("is user login : ", apiResponse.data);
  };

  useEffect(() => {
    checkLoing();
  }, []);

  const value = {
    user,
    setUser,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
