import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import NavBarComp from "./components/NavBarComp";
import { ThemeProvider, Col, Image } from "react-bootstrap";
import TopBanner from "./components/TopBanner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Photos from "./Pages/Photos";
import CommonFooter from "./components/common/CommonFooter";
import Reminders from "./Pages/Reminders";
import CustomerPage from "./Pages/CustomerPage";
import { UserProvider } from "./Contexts/UserContext";

const breakpoint = 700;

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isSmallScreen, setScreenFlag] = useState({ width: "", breakpoint });

  const userContext = createContext();

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <UserProvider>
        <BrowserRouter>
          <>
            <div className="fixed-top">
              <TopBanner />
              <NavBarComp />
            </div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/photos" element={<Photos />} />
              {/* <Route path="/reminders" element={<Reminders />} /> */}
              <Route path="/customers" element={<CustomerPage />} />
            </Routes>
          </>
          <CommonFooter />
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
