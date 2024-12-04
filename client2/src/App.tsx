import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Navbar from "./components/Navbar";
import PhoneNavbar from "./components/PhoneNavbar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [phoneScreen, setPhoneScreen] = useState(window.innerWidth <= 768);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = window.scrollY;
    };

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setPhoneScreen(true);
      } else {
        setPhoneScreen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="app bg-white dark:bg-black">
          <div
            className={`fixed top-0 w-full z-10 transform transition-transform duration-300 ${
              scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
            }`}
          >
            {phoneScreen ? <PhoneNavbar /> : <Navbar />}
          </div>
          <div className="pt-[5rem]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<About />} />
              <Route path="/works" element={<Works />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
