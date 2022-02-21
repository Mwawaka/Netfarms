import React from "react";
import ico from "../images/logo-twitter.png";
import fac from "../images/logo-facebook.png";
import inst from "../images/logo-instagram.png";
function Footer() {
  return (
    <div className="Footer">
      <div className="disp">
        <div className="obj">
          <h1 className="contacts--title">Quick Links:</h1>
          <ul>
            <li>
              <a href="#netfarms">What is NetFarms</a>
            </li>
            <li>
              <a href="#objectives">Objectives</a>
            </li>
            <li>
              <a href="#register">Register for updates</a>
            </li>
          </ul>
        </div>
        <div className="contacts">
        <h1 className="contacts--title" id="contact">Contact us:</h1>
        <p>NetFarms101@gmail.com</p>
        <p>+254709080708 or +254701020304</p>
        </div>
        <div className="follows">
          <h1 className="contacts--title">Follow us on:</h1>
          <ul>
            <li>
              <img src={ico} /> @netfarms
            </li>
            <br />
            <li>
              <img src={fac} /> netfarms.ke
            </li>
            <br />
            <li>
              <img src={inst} /> @netfarms
            </li>
            <br />
            {/* <li><img src={}/></li> */}
          </ul>
        </div>
      
      </div>
      <div className="office">
          <h1 className="contacts--title">Our Offices:</h1>
          <p>Some building, some avenue, some town, some country</p>
        </div>

      <div className="copy">
       
        <small>All rights reserved.</small>
        <br />
        <small>CopyRight © 2022 </small>
      </div>
    </div>
  );
}

export default Footer;
