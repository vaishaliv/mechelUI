import React, { useState, useEffect } from "react";
import "./App.css";
import NavBarComp from "./components/NavBarComp";
import { ThemeProvider, Col, Image } from "react-bootstrap";
import TopBanner from "./components/TopBanner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { GoogleLogin } from '@react-oauth/google';
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Photos from "./Pages/Photos";
import CommonFooter from "./components/common/CommonFooter";
const breakpoint = 700;

// const API_KEY = import.meta.env.VITE_API_KEY;


function App() {
  const CLIENT_KEY = import.meta.env.VITE_CLIENT_ID
  const [width, setWidth] = React.useState(window.innerWidth);
  const [isSmallScreen, setScreenFlag] = useState({ width: "", breakpoint });

  // React.useEffect(() => {
  //   const handleResizeWindow = () => setWidth(window.innerWidth);
  //   const smallScreen = window.innerWidth < breakpoint;
  //   setScreenFlag({ width: window.innerWidth, breakpoint });
  //   // subscribe to window resize event "onComponentDidMount"
  //   window.addEventListener("resize", handleResizeWindow);
  //   return () => {
  //     // unsubscribe "onComponentDestroy"
  //     window.removeEventListener("resize", handleResizeWindow);
  //   };
  // }, []);

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    const smallScreen = window.innerWidth < breakpoint;
    setScreenFlag({ width: window.innerWidth, breakpoint });
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };

    if (user) {
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
          localStorage.setItem("USER-PROFILE", JSON.stringify(res.data)); // Save data
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  console.log("Appppppppppppppppppp", CLIENT_KEY)
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <BrowserRouter>
        <>
          <div className="fixed-top">
            <TopBanner />
            <NavBarComp 
            // isSmallScreen={isSmallScreen}
             />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/photos" element={<Photos />} />
          </Routes>
        </>
        <CommonFooter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
