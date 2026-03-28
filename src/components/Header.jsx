import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginButton, setLoginButoon] = useState("Log In");
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center px-4 md:px-8 lg:px-12 py-3 bg-white shadow-md sticky top-0 z-50">

      {/* Logo */}
      <div className="logo-container flex items-center">
        <img
          className="w-[110px] md:w-[130px] lg:w-[150px] cursor-pointer"
          src={LOGO_URL}
          alt="logo"
        />
      </div>

      {/* Nav */}
      <div>
        <ul className="flex items-center gap-4 md:gap-6 lg:gap-8 text-[14px] md:text-[15px] lg:text-[16px] font-medium">

          <li className="hover:text-orange-500 transition cursor-pointer">
            <Link to="/app">Home</Link>
          </li>

          <li className="hover:text-orange-500 transition cursor-pointer hidden sm:block">
            <Link to="/app/help">Help</Link>
          </li>

          <li className="hover:text-orange-500 transition cursor-pointer hidden md:block">
            <Link to="/app/offers">Offers</Link>
          </li>

          <li className="hover:text-orange-500 transition cursor-pointer">
            <Link to="/app/cart" className="relative">
              🛒
              <span className="ml-1">({cartItems.length})</span>
            </Link>
          </li>

          {/* Login Button */}
          <button
            className="px-3 md:px-4 py-1.5 md:py-2 border border-gray-300 rounded-lg 
            hover:bg-orange-500 hover:text-white hover:border-orange-500 
            transition duration-300 text-sm md:text-base"
            onClick={() => {
              loginButton === "Log In"
                ? setLoginButoon("Log Out")
                : setLoginButoon("Log In");
            }}
          >
            {loginButton}
          </button>

        </ul>
      </div>
    </div>
  );
};

export default Header;