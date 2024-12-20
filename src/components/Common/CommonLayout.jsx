import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

const CommonLayout = () => {
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CommonLayout;
