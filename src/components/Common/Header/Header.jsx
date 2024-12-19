import React from "react";
import { IoCart } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Underline = () => (
  <div className="absolute -bottom-1 rounded left-0 w-full h-[4px] bg-[#ff8800] scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></div>
);

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-[#ff8800] font-bold text-3xl">Maiflix</div>

      {/* Menu Links */}
      <ul className="flex items-center space-x-16 text-gray-800 text-lg font-bold">
        <li className="relative group">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "text-[#ff8800]" : "hover:text-[#ff8800]"
            }
          >
            Home
          </NavLink>
          <Underline />
        </li>
        <li className="relative group">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#ff8800]" : "hover:text-[#ff8800]"
            }
          >
            About
          </NavLink>
          <Underline />
        </li>
        <li className="relative group">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#ff8800] flex items-center"
                : "hover:text-[#ff8800] flex items-center"
            }
          >
            Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-1 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </NavLink>
          <Underline />
        </li>
        <li className="relative group">
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "text-[#ff8800]" : "hover:text-[#ff8800]"
            }
          >
            Pricing
          </NavLink>
          <Underline />
        </li>
        <li className="relative group">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#ff8800]" : "hover:text-[#ff8800]"
            }
          >
            Contact
          </NavLink>
          <Underline />
        </li>
      </ul>

      {/* Right Section */}
      <div className="flex items-center space-x-10 text-md font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#ff8800] font-bold underline"
              : "text-[#ff8800] hover:underline"
          }
        >
          Login
        </NavLink>
        <button className="px-4 py-2 bg-[#ff8800] text-white font-medium rounded-lg hover:bg-[#ff8800] transition">
          Search Job
        </button>
        <div className="relative">
          <NavLink to="/cart" aria-label="Go to Cart">
            <IoCart className="text-[#ff8800] w-9 h-9" />
            <span className="absolute -top-2 -right-2 bg-[#ff8800] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              1
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
