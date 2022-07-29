import { createContext, useContext, useState, useEffect } from "react";

import axios from "axios";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  function register(email,pass,fn,ln){
    axios.post("http://127.0.0.1:5000/register",{
        email: email,
        password: pass,
        firstname: fn,
        lastname: ln
    }).then((res)=> {
        console.log(res.data)
        setAuthToken(res.data.accessToken);
        setUserId(res.data.id);
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("id", res.data.user.id);
    }).catch(e => console.log(e));
  }
  function login(email, pass) {
    console.log(email);
    axios.post("http://127.0.0.1:5000/login",{
        email: email,
        password: pass
    }).then((res) => {
        console.log(res.data);
        setAuthToken(res.data.accessToken);
        setUserId(res.data.id);
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("id", res.data.user.id);
        setIsLoggedIn(true);
    }).catch(e => console.log(e));
  }

  function logout() {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }

  useEffect(() => {
    try {
      const res = localStorage.getItem("token");
      const user = localStorage.getItem("id");
      const token =  localStorage.getItem("token");
      console.log(res);
      if (res !== null) {
        setIsLoggedIn(true);
        setUserId(user)
        setAuthToken(token)
      }
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        userId,
        authToken,
        isLoggedIn,
        setIsLoggedIn,
        setAuthToken,
        setUserId,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
