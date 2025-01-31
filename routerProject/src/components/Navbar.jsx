import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const handleLogoClick = () => {
    window.location.href = "/"; // Navigate to Home and reload the page
  };

  return (
    <div className="sticky container mx-auto top-0 z-[11] w-full px-8 text-2xl font-semibold bg-gray-300 h-16 flex justify-between items-center shadow-md">
      {/* Logo */}
      <h1 className="cursor-pointer" onClick={handleLogoClick}>
        Logo™
      </h1>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-800 border-b-2 border-yellow-400 pb-1"
                : "text-black hover:text-gray-600 transition duration-300"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-800 border-b-2 border-yellow-400 pb-1"
                : "text-black hover:text-gray-600 transition duration-300"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-800 border-b-2 border-yellow-400 pb-1"
                : "text-black hover:text-gray-600 transition duration-300"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
