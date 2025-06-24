import React, { createContext, useEffect, useState } from "react";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [userProfile, setProfile] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const CLIENT_KEY = import.meta.env.VITE_CLIENT_ID;
  useEffect(() => {
    setLoading(true);
    if (user && user.access_token) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          // localStorage.setItem("USER-PROFILE", JSON.stringify(res.data)); // Save data
          setProfile(res.data);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    }
    return () => {
      setLoading(false);
      logOut();
    };
  }, [user]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const logOut = () => {
    // localStorage.removeItem("USER-PROFILE");
    googleLogout();
    setProfile(null);
  };

  const handleUserChange = () => {
    setUser(user);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        handleUserChange,
        isLoading,
        setLoading,
        userProfile,
        login,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
