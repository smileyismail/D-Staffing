import React from "react";

import forDeveloper from "../../assets/ScreeningProcess/forDeveloper.png";

const ScreenProcess = () => {
  return (
    <section
      id="works"
      className="w-screen flex flex-col justify-center items-center"
    >
      <h1 className="lg:text-4xl md:text-3xl font-bold text-2xl text-center max-w-2xl">
        How D-Community assists businesses in&nbsp;
        <span className="bg-yellow-200">
          reducing their recruitment time by 30 days
        </span>
      </h1>
      <p className="text-sm lg:text-l text-center w-4/5 md:w-2/3 lg:w-1/2 mx-auto mt-4">
        We're trusted by 24 Unicorns, 132 YC-funded companies, and 17 Fortune
        500 Companies. We have been working
      </p>

      <div className="w-full flex justify-center items-center mt-10">
        <img
          src={forDeveloper}
          alt="developer"
          className="w-11/12 md:w-10/12"
        />
      </div>
    </section>
  );
};

export default ScreenProcess;
