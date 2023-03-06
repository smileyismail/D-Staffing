import React from "react";

import { brandLogos } from "../../data/Logos";

import HeroAvatar from "../../assets/hero.gif";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-screen  h-full flex flex-col justify-center items-center px-[5%] md:px-[10%] pt-24 md:py-14 md:pt-36 gap-20 bg-heroBg"
    >
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-start gap-7">
          <h1 className="text-5xl font-semibold">
            <span className="text-customBlue">Hire Remote</span> Developers on
            Contract
          </h1>
          <p className="text-base md:text-lg">
            Hire India’s top remote talent. We source, vet & deploy the top
            marketing & technology professionals India has to offer.
          </p>

          <div className="w-screen flex justify-center items-start md:hidden max-h-[40vh]  overflow-hidden px-[20%]">
            <img src={HeroAvatar} alt="HeroAvatar" className="w-3/4" />
          </div>

          <form className="w-full flex justify-center items-center md:justify-start">
            <div className="w-full max-w-md flex items-center bg-customBlue p-1 rounded-md">
              <input
                className="appearance-none min-w-[70%]  p-2  leading-tight focus:outline-none"
                type="email"
                placeholder="Enter your email..."
              />
              <button
                className="flex-shrink-0 w-[30%] text-center text-white font-semibold text-sm  py-1"
                type="button"
              >
                Hire Now
              </button>
            </div>
          </form>

          <div className="w-full flex justify-center md:justify-start items-center gap-2 flex-wrap mx-auto mt-5 mb-10 text-sm">
            <p className="w-fit inline-block">• 99% skilled matched partner</p>
            <p className="w-fit inline-block">• Chat with our experts</p>
            <p className="w-fit inline-block">• 5 days to fill</p>
          </div>
        </div>

        <div className="hidden md:block h-[40vh] md:h-auto overflow-hidden">
          <img src={HeroAvatar} alt="HeroAvatar" className="w-10/12" />
        </div>
      </div>

      <div className="hidden px-4 w-screen md:flex flex-col justify-center items-center text-customGray gap-8">
        <p className="text-center">
          Join 50.000+ websites that use EmbedSocial to sell more
        </p>
        <div className="flex justify-center items-center text-4xl gap-6 flex-wrap">
          {brandLogos.map((logo) => (
            <div key={logo.id}>
              <img src={logo.image} alt="" className="w-3/4 md:w-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* <div></div> */}
    </section>
  );
};

export default Hero;
