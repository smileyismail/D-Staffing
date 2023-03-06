import React from "react";
import googleLogo from "../../assets/Testimonial-images/google.svg";
import star from "../../assets/Testimonial-images/star.svg";

import { testData } from "../../data/TestimonialData";

const starArray = [1, 2, 3, 4, 5];

const Testimonial = () => {
  return (
    <div>
      <h1 className="lg:text-4xl md:text-3xl font-bold text-2xl text-center">
        Testimonials
      </h1>
      <p className="text-sm lg:text-l text-center w-4/5 md:w-2/3 lg:w-1/2 mx-auto mt-4">
        <span className="font-bold">Rated 4.8 </span>
        by our customers on Facebook and Google
      </p>
      <div className="bg-blue-600 p-4 mt-6 mx-auto sm:w-4/5 flex overflow-x-scroll gap-8 sm:grid sm:bg-white sm:grid-cols-2 md:grid-cols-3 md:w-auto xl:w-4/5 lg:grid-cols-4 grid-flow-row">
        {testData.map((data, idx) => (
          <div
            className="drop-shadow-md mx-auto w-44 text-xs shrink-0 sm:shrink border border-gray-50 h-64 bg-white rounded-lg px-4 py-5 relative flex flex-col justify-between sm:w-56 md:w-60 xl:w-64 md:text-sm md:h-80 "
            key={idx}
          >
            <div>
              <img src={data.image} alt="profile-img" className="w-12" />
              <p className="flex items-center my-2 w-3 md:w-4">
                {starArray.map((starIcon, idx) => (
                  <img key={idx} src={star} alt="star" />
                ))}
              </p>
              <p className="font-bold">{data.name}</p>
              <p className="text-base">
                {data.comments.length < 100
                  ? data.comments
                  : `${data.comments.substring(0, 200)}...`}
              </p>
            </div>
            <div className="flex items-center">
              <span className="mr-3">
                <img src={googleLogo} alt="" className="w-3" />
              </span>
              <span className="text-slate-400 text-xs">2 weeks ago</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
