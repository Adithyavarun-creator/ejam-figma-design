import React from "react";
import { HeaderStyles } from "../styles/HeaderStyles.js";
import logo from "../assets/logo.png";
import norton from "../assets/norton.png";
import mcafee from "../assets/mcafee.png";

import side from "../assets/side.png";

const Header = () => {
  return (
    <>
      <HeaderStyles>
        <div>
          <img src={logo} alt="logo" className="header-main-logo" />
        </div>
        <div className="header-secure-box">
          <div>
            <img src={norton} alt="logo" className="header-secure-logo" />
          </div>
          <div>
            <img src={mcafee} alt="logo" className="header-secure-logo" />
          </div>
        </div>
      </HeaderStyles>
    </>
  );
};

export default Header;
