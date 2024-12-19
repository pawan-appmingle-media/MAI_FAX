import React from "react";

const Banner = () => {
  const image1 = require("../../../images/maiflix-img-1.jpg");
  return (
    <>
      <div>
        <img
          src={image1}
          alt="image"
          style={{ width: "100vw", height: "90vh", margin: "auto" }}
        />
      </div>
    </>
  );
};

export default Banner;
