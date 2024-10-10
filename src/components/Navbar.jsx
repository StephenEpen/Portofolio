import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import navbarLogo from "../assets/navbar-logo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#232323] h-24 flex text-2xl justify-between text-gray-200 items-center px-6 max-w-[1300px] mx-auto">
      <a href="/"><img src={navbarLogo} alt="Home" className="w-15 h-8 md:w-25 md:h-10"/></a>

      <ul className="hidden md:flex gap-12 cursor-pointer">
        <li className="relative group">
          <Link to="education" smooth={true} offset={-96} duration={500}>
            Education
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </li>

        <li className="relative group">
          <Link to="about" smooth={true} offset={-96} duration={500}>
            About
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </li>

        <li className="relative group">
          <Link to="portofolio" smooth={true} offset={-96} duration={500}>
            Portofolio
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </li>
      </ul>

      <div onClick={toggleNav} className="md:hidden z-30">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          nav
            ? "text-center z-20 fixed h-full w-full left-0 top-0 bg-[#232323]"
            : "fixed left-[-100%]"
        }
      >
        <ul className="font-semibold text-4xl space-y-8 mt-24">
          <li>
            <Link
              to="education"
              onClick={closeNav}
              smooth={true}
              offset={-96}
              duration={500}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="about"
              onClick={closeNav}
              smooth={true}
              offset={-96}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="portofolio"
              onClick={closeNav}
              smooth={true}
              offset={-96}
              duration={500}
            >
              Portofolio
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
