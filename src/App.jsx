import React from "react";
import { Route, Routes } from "react-router-dom";
import CommonLayout from "./components/Common/CommonLayout";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
