import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = ()=>{
   const [loginButton , setLoginButoon] = useState("Log In")
  return(
  <div className="header">
    <div className="logo-container">
      <img className="logo" src={LOGO_URL}  />     
    </div>
<div className="nav-item">
  <ul>
    <li>Home</li>
    <li>About Us</li>
    <li>contact us</li>
    <li>cart</li>
    <button className="login-btn" onClick={()=>setLoginButoon("Log Out")}>{loginButton}</button>
  </ul>
</div>

  </div>);
}

export default Header