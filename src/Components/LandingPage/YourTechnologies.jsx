import React, { useState } from "react";

import { yourTechnologies } from "../../data/Logos";
import { TiPlus, TiMinus } from "react-icons/ti";

const YourTechnologies = () => {
  const [view, setView] = useState(false);

  const viewTechnologies = !view
    ? [...yourTechnologies].slice(0, 6)
    : [...yourTechnologies];

  const handleView = () => {
    setView((prev) => {
      return !prev;
    });
  };

  return (
    <section className="py-10 bg-blue-50">
      <div className="text-center">
        <h1 className="font-bold text-3xl  lg:text-5xl">
          Lets’s Choose your technology
        </h1>
        <p className="xs:text-xs md:text-xl lg:text-2xl mt-5">
          Let choose your technology to do your project and we provide you with
          best developer
        </p>
      </div>

      <div className="mt-10 p-5 flex justify-center items-center gap-8 flex-wrap lg:px-52  ">
        {viewTechnologies.map((technology) => (
          <div
            key={technology.id}
            className="w-36 h-32 flex flex-col justify-center items-center flex-wrap gap-3 rounded-lg bg-white drop-shadow-md border-[0.2px] border-customBlue"
          >
            <img
              src={technology.image}
              alt={technology.name}
              className="w-14"
            />
            <p className="text-xs text-center px-2">
              {technology.name} Development
            </p>
          </div>
        ))}
      </div>
      <div className="flex mt-5 gap-2 justify-center">
        <div
          onClick={() => handleView()}
          className="flex mt-5 gap-2 justify-center items-center cursor-pointer"
        >
          {view === false ? (
            <>
              <TiPlus className="text-customBlue p-1 border-2 border-customBlue rounded-full text-3xl" />
              <span>View More</span>
            </>
          ) : (
            <>
              <TiMinus className="text-customBlue p-1 border-2 border-customBlue rounded-full text-3xl" />
              <span>View Less</span>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default YourTechnologies;
