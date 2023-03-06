import React from "react";

import { brandLogos } from "../../data/Logos";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const TrustedWebsites = () => {
  return (
    <section className="relative w-screen px-[5%] md:px-[10%] flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-4xl max-w-4xl font-black text-center mb-20">
        From the creators of Embed Social trusted and displayed on &nbsp;
        <span className="bg-yellow-300">50,000+ websites</span>
      </h1>

      <div className="gradient max-w-3xl flex justify-center items-center flex-wrap gap-6 rounded-md">
        {shuffle(brandLogos).map((logo) => (
          <div key={logo.id}>
            <img src={logo.image} alt="brand" className="w-20" />
          </div>
        ))}
        {shuffle(brandLogos).map((logo) => (
          <div key={logo.id}>
            <img src={logo.image} alt="brand" className="w-20" />
          </div>
        ))}
        {shuffle(brandLogos).map((logo) => (
          <div key={logo.id}>
            <img src={logo.image} alt="brand" className="w-20" />
          </div>
        ))}
        {shuffle(brandLogos).map((logo) => (
          <div key={logo.id}>
            <img src={logo.image} alt="brand" className="w-20" />
          </div>
        ))}
        {shuffle(brandLogos).map((logo) => (
          <div key={logo.id}>
            <img src={logo.image} alt="brand" className="w-20" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedWebsites;
