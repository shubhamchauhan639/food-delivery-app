import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [loginButton , setLoginButoon] = useState("Log In")

  return(

  <div className="flex justify-between items-center px-12 py-4 border-b bg-white shadow-sm"> 

    <div className="logo-container">
      <img className="w-[150px]" src={LOGO_URL} /> 
    </div>

    <div>
      <ul className="flex items-center gap-6 text-[16px] font-medium"> 

        <li className="hover:text-orange-500 cursor-pointer">
          <Link to="/">Home</Link>
        </li>

        <li className="hover:text-orange-500 cursor-pointer">
          <Link to="/about">Help</Link>
        </li>

        <li className="hover:text-orange-500 cursor-pointer">
          <Link to="/offers">Offers</Link>
        </li>

        <li className="hover:text-orange-500 cursor-pointer">
          cart
        </li>

        <button
          className="px-5 py-2 border rounded-lg hover:bg-orange-500 hover:text-white transition" 
          onClick={()=>{
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
}

export default Header;