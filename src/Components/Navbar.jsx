import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../Assets/CSS/Navbar.min.css";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = (event) => {
    event.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = () => {
    setIsDropdownOpen(false);
  };

  const handleClickOutsideDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutsideDropdown);

    return () => {
      window.removeEventListener("click", handleClickOutsideDropdown);
    };
  }, []);

  return (
    <nav className="bg-nav-black p-[17px] text-center font-bold text-white font-abril-fatface font-rubik">
      <Link className="text-lg p-[6px]" to="/">
        Home
      </Link>
      <div className="relative inline-block text-left">
        <button
          className="text-lg p-[6px] focus:outline-none"
          onClick={handleDropdownToggle}
        >
          Schools
        </button>
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-10"
          >
            <Link
              to="/Schools/Districts/FHS"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={handleOptionClick}
            >
              Franklin
            </Link>
            <Link
              to="/Schools/Districts/DaytonHS"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={handleOptionClick}
            >
              Dayton
            </Link>
            <Link
              to="/Schools/Districts/HollySpringsHS"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={handleOptionClick}
            >
              Holly Springs
            </Link>
            <Link
              to="/Schools/Districts/OCHS"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={handleOptionClick}
            >
              Oil City
            </Link>
          </div>
        )}
      </div>
      <Link className="text-lg p-[6px]" to="/Other/Random">
        Random
      </Link>
    </nav>
  );
}

export default Navbar;
