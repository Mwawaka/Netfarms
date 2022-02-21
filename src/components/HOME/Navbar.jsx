import React from "react";
import img from "../images/net.png";
function Navbar() {
  return (
    <nav className="nav--bar">
      <img src={img} className="nav--logo" />
      {/* <span className='nav--title'>NetFarms</span> */}
      <div className="nav--links">
        <ul>
          <li> <a href="#" id="current" title="Home">Home</a></li>
          <li><a href="" title="Communtiy">Community</a></li>
          <li> <a href="" title="Farm">Farm</a></li>
          <li> <a href="" title="Contact-us">Contact us</a>
          </li>
          </ul>




      </div>
    </nav>
  );
}

export default Navbar;
