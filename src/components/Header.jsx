import { LOGO_URL } from "../utils/constants";
const Header = ()=>{
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
  </ul>
</div>

  </div>);
}

export default Header