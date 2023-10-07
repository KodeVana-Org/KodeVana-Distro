// Router link not set

import { useState } from "react";
import { Link } from "react-router-dom";
import { Img } from "react-image";
import Menu_btn from "../../assets/menu_bar.svg";


const MainNav: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative flex bg-slate-900 justify-center py-3">
            <div className="relative w-60 xs:w-72 sm:w-96 md:w-fit lg:w-fit xl:w-fit md:px-7 lg:px-7 xl:px-7 flex items-center justify-center bg-slate-950 rounded-md shadow-2xl">
                {/* Logo */}
                <div className="md:mr-10 lg:mr-40 xl:mr-40 py-2 xl:py-3">
                    <Link to="/">
                        <p className="text-yellow-400 text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold">
                            Kode<span className="text-white">Vana</span>
                        </p>
                    </Link>
                </div>

                {/* Nav Items */}
                <div className="flex text-white">
                    <ul className="hidden md:inline-flex lg:inline-flex xl:inline-flex md:gap-3 lg:gap-7 xl:gap-7">
                        <li className="navbarLi group">
                            <Link to="/">
                                Home
                            </Link>
                            <div className="navbarUL"></div>
                        </li>
                        <li className="navbarLi group">
                            <Link to="/Blog">
                                Blogs
                            </Link>
                            <div className="navbarUL"></div>
                        </li>
                        <li className="navbarLi group">
                            <Link to="/Freebie">
                                Freebies
                            </Link>
                            <div className="navbarUL"></div>
                        </li>
                        <li className="navbarLi group">
                            <Link to="/Project">
                                Projects
                            </Link>
                            <div className="navbarUL"></div>
                        </li>
                        <li className="navbarLi group">
                            <Link to="/About">
                                About
                            </Link>
                            <div className="navbarUL"></div>
                        </li>
                        <li className="navbarLi group">
                            <Link to="/Contact">
                                Contact
                            </Link>
                            <div className="navbarUL"></div>
                        </li>
                    </ul>

                    {/* Menu Button */}
                    <div className="inline-flex md:hidden lg:hidden xl:hidden">
                        <Img
                            className="w-7 xs:w-8 sm:w-9 h-7 xs:h-8 sm:h-9 p-1 ml-7 rounded-md bg-slate-700 hover:shadow-xl"
                            src={Menu_btn}
                            alt="Menu Button"
                            onClick={toggleMenu}
                        />
                    </div>
                </div>

                {/* Menu bar for small screens */}
                {isMenuOpen && (

                    <div className="absolute w-60 xs:w-72 sm:w-96 py-3 rounded-md top-10 xs:top-11 sm:top-12 md:hidden text-center lg:hidden xl:hidden bg-slate-950 z-10">
                        <ul className="text-base font-bold leading-5 text-white">
                            <li className="">
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="mt-5">
                                <Link to="/Blog">
                                    Blogs
                                </Link>
                            </li>
                            <li className="mt-5">
                                <Link to="/Freebie">
                                    Freebies
                                </Link>
                            </li>
                            <li className="mt-5">
                                <Link to="/Project">
                                    Projects
                                </Link>
                            </li>
                            <li className="mt-5">
                                <Link to="/About">
                                    About
                                </Link>
                            </li>
                            <li className="mt-5 mb-2">
                                <Link to="/Contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MainNav;

