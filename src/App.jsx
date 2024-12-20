import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Cart from "./components/cart/Carts";
import CommonLayout from "./components/Common/CommonLayout";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Login from "./components/Login/Login";
import Pricing from "./components/pricing/Pricing";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<CommonLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
