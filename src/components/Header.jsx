import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = ()=>{
   const [loginButton , setLoginButoon] = useState("Log In")
   console.log(loginButton)
  return(
  <div className="header">
    <div className="logo-container">
      <img className="logo" src={LOGO_URL}  />     
    </div>
<div className="nav-item">
  <ul>
    <li><Link to = "/">Home</Link></li>
    <li><Link to ="/about">Help</Link></li>
    <li><Link to= "/offers">Offers</Link></li>
    <li>cart</li>
    <button className="login-btn" onClick={()=> {
      loginButton === "Log In" 
      ? setLoginButoon("Log Out")
       : setLoginButoon("Log In");}}>{loginButton}</button>
  </ul>
</div>

  </div>);
}

export default Header