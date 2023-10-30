import React from "react";
import { FooterStyles } from "../styles/FooterStyles";
import { AiTwotoneLock } from "react-icons/ai";
import LockImage from "../assets/lock.png";

const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer-copyright">
        <div>
          <span className="footer-text">Copyright (c) 2023</span>
        </div>
        <div>
          <span className="footer-liner"></span>
        </div>
        <div>
          <div>
            <span className="footer-text">Clarifionsupport@clarifion.com</span>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div>
          <img src={LockImage} alt="" className="footer-lock-image "/>
        </div>
        <div>
          <span className="footer-text">Secure 256-bit SSL encryption.</span>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
