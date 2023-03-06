import React from "react";
import { Link } from "react-router-dom";

import { socialLinks } from "../../data/Links";

import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="w-screen text-center flex flex-col justify-center items-center lg:text-left bg-footerBg text-white px-[5%] md:px-[10%]">
      <div className="w-screen py-20 bg-lightBlue">
        <div className="flex flex-col justify-center text-black items-center gap-6 mx-auto text-center max-w-xl">
          <h1 className="text-4xl font-black">
            Ready to dive in?
            <br /> Create your widget today.
          </h1>
          <p>
            Display Instagram Stories Widget on your website, that auto-syncs,
            and updates each time you add a photo in your active story.
          </p>
          <form className="w-full flex justify-center items-center ">
            <div className="w-fit sm:w-full max-w-md flex items-center bg-customBlue p-1 rounded-md">
              <input
                className="appearance-none w-[65%] md:w-[70%]  p-2  leading-tight focus:outline-none text-sm md:text-base"
                type="email"
                placeholder="Enter your email..."
              />
              <button
                className="flex-shrink-0 w-[35%] md:w-[30%] text-center text-white font-semibold text-xs  py-1"
                type="button"
              >
                Start Free Trial
              </button>
            </div>
          </form>

          <div className="w-full flex justify-center items-center gap-2 flex-wrap mx-auto text-sm">
            <p className="w-fit inline-block">• Free 7-day trial</p>
            <p className="w-fit inline-block">• Easy setup</p>
            <p className="w-fit inline-block">• Cancel any time</p>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center lg:justify-between p-6 border-b border-customBlue">
        <div className="hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center items-center gap-3">
          {socialLinks.map((socialLink) => (
            <Link
              to={socialLink.url}
              key={socialLink.id}
              className="text-white text-xl"
            >
              {socialLink.image}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="">
            <h6
              className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          "
            >
              <img src={Logo} alt="Logo" className="w-10 mr-2" />
              D-Staffing
            </h6>
            <p>
              Hire India’s top remote talent. We source, vet & deploy the top
              marketing & technology professionals India has to offer.
            </p>
          </div>

          <hr className="md:hidden" />

          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Technologies
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-400">
                Angular
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-400">
                React
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-400">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray-400">
                React Native
              </a>
            </p>
          </div>

          <hr className="md:hidden" />

          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Links
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-400">
                Price
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-400">
                Settings
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-400">
                Clients
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray-400">
                Help
              </a>
            </p>
          </div>
          <hr className="md:hidden" />
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Contact
            </h6>
            <p className="flex items-center justify-center md:justify-start mb-4">
              New York, NY 10012, US
            </p>
            <p className="flex items-center justify-center md:justify-start mb-4">
              info@example.com
            </p>
            <p className="flex items-center justify-center md:justify-start mb-4">
              0987654321
            </p>
            <p className="flex items-center justify-center md:justify-start">
              1234567890
            </p>
          </div>
        </div>
      </div>

      <hr className="md:hidden" />

      <div className="text-center p-6">
        <span>© 2022 Copyright: </span>
        <a className="text-gray-200 font-semibold" href="/">
          D-Community
        </a>
      </div>
    </footer>
  );
};

export default Footer;
