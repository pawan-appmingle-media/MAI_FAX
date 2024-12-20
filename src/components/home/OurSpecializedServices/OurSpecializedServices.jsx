import React from "react";
import { IoStar } from "react-icons/io5";

const OurSpecializedServices = () => {
  const services = [
    {
      img: require("../../../images/Figure_img-1.jpg"),
      title: "Domestic Help",
      rating: 4.9,
    },
    {
      img: require("../../../images/Figure_img-2.jpg"),
      title: "Cooks",
      rating: 4.8,
    },
    {
      img: require("../../../images/Figure_img-3.jpg"),
      title: "Babysitter/ Japa",
      rating: 4.9,
    },
    {
      img: require("../../../images/Figure_img-4.jpg"),
      title: "All-Rounder",
      rating: 4.7,
    },
    {
      img: require("../../../images/Figure_img-5.jpg"),
      title: "24 Hrs - Live In",
      rating: 4.4,
    },
  ];

  return (
    <div className="bg-gray-100 p-8 border-black">
      <h2 className="text-center font-semibold text-3xl mb-2">
        Our Specialized Services
      </h2>
      <h2 className="text-center font-semibold text-3xl">
        Hire Experts, <br /> Tailored Specifically to Your Requirements
      </h2>
      <p className="text-[#656565] text-center m-2">
        Maiflix provides fully verified professionals along with a complimentary
        replacement policy to ensure your satisfaction.
      </p>
      <div className="flex justify-center items-center gap-8 p-4 m-4">
        {services.map((service, index) => (
          <div key={index} className={`card${index + 1}`}>
            <img
              src={service.img}
              alt={service.title}
              className="rounded-3xl"
            />
            <h3 className="font-semibold text-center text-lg">
              {service.title}
            </h3>
            <div className="flex items-center justify-center gap-2 text-[#FECC00] w-full">
              {[...Array(5)].map((_, starIndex) => (
                <IoStar
                  key={starIndex}
                  style={{
                    color:
                      starIndex < Math.floor(service.rating)
                        ? "#FECC00"
                        : "#d1d1d1",
                  }}
                />
              ))}
              <span className="font-bold text-gray-700 ml-1">
                {service.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSpecializedServices;
