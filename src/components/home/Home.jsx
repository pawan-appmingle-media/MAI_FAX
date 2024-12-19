import React from "react";
import Banner from "./Banner/Banner";
import FF8800 from "./FF8800/FF8800";
import OurSpecializedServices from "./OurSpecializedServices/OurSpecializedServices";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <OurSpecializedServices />
        <FF8800 />
      </div>
    </>
  );
};

export default Home;
