import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { ShopContext } from "../context/ShopContext";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch , getCartCount} = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium px-4 sm:px-6">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 transition-colors duration-300 ${
              isActive ? 'text-gray-900' : 'hover:text-gray-900'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <p>HOME</p>
              <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
            </>
          )}
        </NavLink>
        <NavLink 
          to="/collection" 
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 transition-colors duration-300 ${
              isActive ? 'text-gray-900' : 'hover:text-gray-900'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <p>COLLECTION</p>
              <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
            </>
          )}
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 transition-colors duration-300 ${
              isActive ? 'text-gray-900' : 'hover:text-gray-900'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <p>ABOUT US</p>
              <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
            </>
          )}
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 transition-colors duration-300 ${
              isActive ? 'text-gray-900' : 'hover:text-gray-900'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <p>CONTACT</p>
              <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
            </>
          )}
        </NavLink>
      </ul>

      {/* Right Side Icons */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <img 
          onClick={() => setShowSearch(true)} 
          src={assets.search_icon} 
          className="w-5 cursor-pointer hover:scale-110 transition-transform duration-300" 
          alt="Search" 
        />

        {/* Profile Dropdown */}
        <div className="group relative">
          <Link to='/login'>
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer hover:scale-110 transition-transform duration-300"
              alt="Profile"
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white border border-gray-200 text-gray-600 rounded-xl shadow-lg">
              <p className="cursor-pointer hover:text-black transition-colors duration-200">My Profile</p>
              <p className="cursor-pointer hover:text-black transition-colors duration-200">Orders</p>
              <p className="cursor-pointer hover:text-black transition-colors duration-200">LogOut</p>
            </div>
          </div>
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img 
            src={assets.cart_icon} 
            className="w-5 min-w-5 hover:scale-110 transition-transform duration-300" 
            alt="Cart" 
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Button */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden hover:scale-110 transition-transform duration-300"
          alt="Menu"
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) => 
              `py-2 pl-6 border-b border-gray-100 transition-colors duration-200 ${
                isActive ? 'bg-gray-50 text-gray-900' : 'hover:bg-gray-50'
              }`
            }
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) => 
              `py-2 pl-6 border-b border-gray-100 transition-colors duration-200 ${
                isActive ? 'bg-gray-50 text-gray-900' : 'hover:bg-gray-50'
              }`
            }
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) => 
              `py-2 pl-6 border-b border-gray-100 transition-colors duration-200 ${
                isActive ? 'bg-gray-50 text-gray-900' : 'hover:bg-gray-50'
              }`
            }
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) => 
              `py-2 pl-6 border-b border-gray-100 transition-colors duration-200 ${
                isActive ? 'bg-gray-50 text-gray-900' : 'hover:bg-gray-50'
              }`
            }
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;