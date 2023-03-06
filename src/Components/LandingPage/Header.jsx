import React, { useState } from "react";

import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.png";
import HeaderMobileNav from "./HeaderMobileNav";

const Header = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const [navScrollFix, setNavScrollFix] = useState(false);

  function navbarFix() {
    if (window.scrollY >= 800) {
      setNavScrollFix(true);
    } else {
      setNavScrollFix(false);
    }
  }

  window.addEventListener("scroll", navbarFix);

  return (
    <header
      className={`fixed z-50 ${
        navScrollFix === true ? "bg-white" : "bg-heroBg"
      } w-screen flex justify-between items-center min-h-[8%] max-h-[8%]  py-2 px-[8%] transition-all duration-150`}
    >
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-10" />
      </Link>

      {/* nav for desktop */}

      <nav className="hidden md:flex">
        <ul className="flex justify-center items-center gap-6 font-medium">
          <li>
            <a
              href="#home"
              onClick={() => setActiveSection("#home")}
              className={`${
                activeSection === "#home" && "border-b-2 border-customBlue"
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#works"
              onClick={() => setActiveSection("#works")}
              className={`${
                activeSection === "#works" && "border-b-2 border-customBlue"
              }`}
            >
              How it work's
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setActiveSection("#about")}
              className={`${
                activeSection === "#about" && "border-b-2 border-customBlue"
              }`}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#faqs"
              onClick={() => setActiveSection("#faqs")}
              className={`${
                activeSection === "#faqs" && "border-b-2 border-customBlue"
              }`}
            >
              FAQ's
            </a>
          </li>

          <li>
            <Link to="/logIn">Log In</Link>
          </li>
          <li>
            <Link to="/signUp">
              <button className="font-semibold text-sm bg-customBlue text-white px-4 py-2 rounded-sm ml-2">
                Get Started
                <img
                  src={require("../../assets/getStarted.png")}
                  alt="yellowLine"
                />
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      {/* nav for mobile */}
      <nav className="flex md:hidden">
        <HeaderMobileNav
          onShowLoginMenu={showLoginMenu}
          onSetShowLoginMenu={setShowLoginMenu}
          onSetActiveSection={setActiveSection}
        />
      </nav>
    </header>
  );
};

export default Header;
