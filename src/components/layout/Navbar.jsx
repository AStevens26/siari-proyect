import React, { useState } from "react";
import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';

const Navbar = ({ sidebarToggle, setSidebarToggle }) => {  // Corregimos la destructuración de los props
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex justify-between  items-center px-4 py-3 bg-gray-100  shadow-lg w-full">
      {/* Logo and menu icon */}
      <div className="flex items-center text-xl">
        <FaBars 
          className="text-gray-400 mr-4 cursor-pointer" 
          onClick={() => setSidebarToggle(!sidebarToggle)}  // Corregimos onClick
          aria-label="Toggle Menu" 
        />
      </div>

      {/* Search bar, notifications, and user profile */}
      <div className="flex items-center gap-x-5">
        
        {/* Search bar */}
        <div className="relative md:w-64">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button className="p-1 focus:outline-none text-gray-500 hover:text-white" aria-label="Search">
              <FaSearch />
            </button>
          </span>
          <input
            type="text"
            className="w-full px-4 py-2 pl-10 rounded-md shadow outline-none focus:ring focus:ring-indigo-500"
            placeholder="Search..."
          />
        </div>

        {/* Notifications */}
        <div className="text-gray-400 cursor-pointer">
          <FaBell className="w-6 h-6" aria-label="Notifications" />
        </div>

        {/* User profile with dropdown */}
        <div className="relative">
          <button 
            className="text-gray-400 focus:outline-none" 
            aria-haspopup="true" 
            aria-expanded={isDropdownOpen ? "true" : "false"}
            onClick={toggleDropdown}
          >
            <FaUserCircle className="w-6 h-6 mt-1" aria-label="User Profile" />
          </button>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 bg-white rounded-lg shadow w-32 mt-2 z-10">
              <ul className="py-2 text-black">
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-200">Profile</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-200">Settings</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-gray-200">Log Out</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
