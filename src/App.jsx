import "./App.css";
import NavBarComp from "./components/NavBarComp";
import { ThemeProvider } from "react-bootstrap";
import TopBanner from "./components/TopBanner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Photos from "./Pages/Photos";
import CommonFooter from "./components/common/CommonFooter";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <BrowserRouter>
        <>
          <TopBanner />
          <NavBarComp />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/photos" element={<Photos />} />
          </Routes>
        </>
        <CommonFooter/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
