import React from "react";
import { IoStar } from "react-icons/io5";

const OurSpecializedServices = () => {
  const card1img = require("../../../images/Figure_img-1.jpg");
  const card2img = require("../../../images/Figure_img-2.jpg");
  const card3img = require("../../../images/Figure_img-3.jpg");
  const card4img = require("../../../images/Figure_img-4.jpg");
  const card5img = require("../../../images/Figure_img-5.jpg");
  return (
    <>
      <div className="bg-gray-100 p-8 border-black">
        <h2 className="text-center font-semibold text-3xl mb-2">
          Our Specialized Services
        </h2>
        <h2 className="text-center font-semibold text-3xl">
          Hire Experts, <br /> Tailored Specifically to Your Requirements
        </h2>
        <p className="text-[#656565] text-center m-2">
          Maiflix provides fully verified professionals along with a
          complimentary replacement policy to ensure your satisfaction.
        </p>
        <div className="flex  justify-center items-center gap-8 p-4 m-4">
          <div className="card1">
            <img src={card1img} alt="" />
            <h3 className="font-semibold text-center text-lg">Domestic Help</h3>
            <div className="flex items-center justify-center gap-2 text-[#FECC00]  w-full">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <span className="font-bold text-gray-700 ml-1">4.9</span>
            </div>
          </div>
          <div className="card2">
            <img src={card2img} alt="" />
            <h3 className="font-semibold text-center text-lg">Cooks</h3>
            <div className="flex items-center justify-center gap-2 text-[#FECC00]  w-full">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <span className="font-bold text-gray-700 ml-1">4.8</span>
            </div>
          </div>
          <div className="card3">
            <img src={card3img} alt="" />
            <h3 className="font-semibold text-center text-lg">
              Babysitter/ Japa
            </h3>
            <div className="flex items-center justify-center gap-2 text-[#FECC00]  w-full">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <span className="font-bold text-gray-700 ml-1">4.9</span>
            </div>
          </div>
          <div className="card4">
            <img src={card4img} alt="" />
            <h3 className="font-semibold text-center text-lg">All-Rounder</h3>
            <div className="flex items-center justify-center gap-2 text-[#FECC00]  w-full">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <span className="font-bold text-gray-700 ml-1">4.7</span>
            </div>
          </div>
          <div className="card5">
            <img src={card5img} alt="" />
            <h3 className="font-semibold text-center text-lg">
              24 Hrs - Live In
            </h3>
            <div className="flex items-center justify-center gap-2 text-[#FECC00]  w-full">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <span className="font-bold text-gray-700 ml-1">4.4</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSpecializedServices;
