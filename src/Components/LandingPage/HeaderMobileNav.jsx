import React, { useState } from "react";

import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import { socialLinks } from "../../data/Links";

const HeaderMobileNav = (props) => {
  const { onSetActiveSection } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <>
      <ul className="flex justify-end items-center font-medium gap-3">
        <li>
          <Link to="/logIn">Log In</Link>
        </li>

        <li>
          <button onClick={handleToggleMenu}>
            <GiHamburgerMenu className="text-xl mt-1" />
          </button>
        </li>
      </ul>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-black/[0.7]">
          <ul className="px-6 py-2 w-[80vw] h-screen bg-white rounded-xl flex flex-col justify-start items-start  text-base text-start font-semibold">
            <li className="w-full flex justify-end items-center">
              <IoIosClose
                className="text-4xl cursor-pointer mb-10"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              />
            </li>

            <li
              className="cursor-pointer hover:bg-blue-200 w-full px-4 py-4 border-b-[1px]"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <a
                href="#home"
                onClick={() => onSetActiveSection("#home")}
                className="w-full inline-block"
              >
                Home
              </a>
            </li>
            <li
              className="cursor-pointer hover:bg-blue-200 w-full px-4 py-4 border-b-[1px]"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <a
                href="#works"
                onClick={() => onSetActiveSection("#works")}
                className="w-full inline-block"
              >
                How it work's
              </a>
            </li>
            <li
              className="cursor-pointer hover:bg-blue-200 w-full px-4 py-4 border-b-[1px]"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <a
                href="#about"
                onClick={() => onSetActiveSection("#about")}
                className="w-full inline-block"
              >
                About Us
              </a>
            </li>
            <li
              className="cursor-pointer hover:bg-blue-200 w-full px-4 py-4 border-b-[1px]"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <a
                href="#faqs"
                onClick={() => onSetActiveSection("#faqs")}
                className="w-full inline-block"
              >
                FAQ's
              </a>
            </li>

            <ul className="mt-auto mb-10 mx-auto">
              <li className="flex justify-center items-center gap-3">
                {socialLinks.map((socialLink) => (
                  <Link
                    to={socialLink.url}
                    key={socialLink.id}
                    className="text-black text-base"
                  >
                    {socialLink.image}
                  </Link>
                ))}
              </li>
            </ul>
          </ul>
        </div>
      )}
    </>
  );
};

export default HeaderMobileNav;
