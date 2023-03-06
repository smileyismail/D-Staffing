import React from "react";

import manager from "../../assets/manager.png";

const ProjectManager = () => {
  return (
    <section id="about" className="w-screen px-[5%] md:px-[10%]">
      <div className="bg-footerBg p-4 rounded-md flex flex-col-reverse md:flex-row justify-between items-between gap-10">
        <div className="md:w-3/5 text-white flex flex-col justify-center items-start gap-4">
          <h1 className="text-3xl font-bold">Lorem ipsum dolor</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quibusdam, magnam natus maxime libero cum placeat quis, ad eum
            deleniti earum. Minima, modi consequuntur quae quasi consectetur
            dignissimos temporibus blanditiis?
          </p>
          <h2 className="text-3xl font-serif manager-name">Manager Name</h2>
        </div>
        <div className="mx-auto">
          <img src={manager} alt="manager" className="rounded-md max-w-xs" />
        </div>
      </div>
    </section>
  );
};

export default ProjectManager;
