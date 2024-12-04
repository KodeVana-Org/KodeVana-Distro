import { useState } from "react";
import { Link } from "react-router-dom";
import { IconL, IconD } from "../assets/icons";
import "../assets/styles/Navbar.css";
import { useTheme } from "../context/ThemeContext";

function PhoneNavbar() {
  const { theme, toggleTheme } = useTheme();
  const [showNavItems, setShowNavItems] = useState(false);

  const handleMenuBtn = () => {
    setShowNavItems(!showNavItems);
  };

  return (
    <div className="relative px-3 py-2 flex justify-between items-center text-black dark:text-white bg-white dark:bg-black">
      <button className="h-7 aspect-square" onClick={handleMenuBtn}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            fill={theme === "light" ? "#000" : "#fff"}
            d="M0 96C0 78.3 14.3 64 20 64l384 0c17.7 0 20 14.3 20 32s-14.3 20-20 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-20 20-32l384 0c17.7 0 20 14.3 20 32s-14.3 20-20 32L32 288c-17.7 0-20-14.3-20-32zM448 416c0 17.7-14.3 20-20 32L32 448c-17.7 0-20-14.3-20-32s14.3-20 20-32l384 0c17.7 0 20 14.3 20 32z"
          />
        </svg>
      </button>
      <Link to={"/"}>
        <img
          className="w-28"
          src={theme === "light" ? IconL : IconD}
          alt="KODEVANA"
        />
      </Link>
      <div className="flex text-center items-center text-xl gap-7">
        <Link className="flex gap-1 items-center text-center" to={"/contact"}>
          <span className="pb-1.5 m-0 flex justify-center items-center text-2xl text-white dark:text-black bg-black dark:bg-white h-[30px] aspect-square rounded-full">
            &#x21C0;
          </span>
          <h3 className="underline">Hire us</h3>
        </Link>
      </div>
      <div
        className={`absolute top-0 left-0 w-full bg-white dark:bg-black ${showNavItems ? "translate-y-0" : "-translate-y-full"} duration-500 shadow-sm shadow-gray-100 dark:shadow-gray-900`}
      >
        <div className="w-full px-3 py-4 flex justify-between">
          <button className="h-7 aspect-square" onClick={handleMenuBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                fill={theme === "light" ? "#000" : "#fff"}
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </button>
          <div className="flex flex-col items-center text-2xl leading-loose">
            <Link to={"/works"}>Works</Link>
            <Link to={"services"}>Services</Link>
            <Link to={"/aboutus"}>About us</Link>
          </div>
          <div className="flex justify-center">
            <label
              className={`toggle1 flex items-center" htmlFor="switch ${theme === "dark" ? "bg-white" : "bg-black"}`}
            >
              <input
                id="switch"
                className="input"
                type="checkbox"
                onChange={toggleTheme}
              />
              <div className="icon icon--moon">
                <svg
                  height="20"
                  width="20"
                  fill="#fff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                </svg>
              </div>
              <div className="icon icon--sun">
                <svg
                  height="20"
                  width="20"
                  fill="#000"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneNavbar;
