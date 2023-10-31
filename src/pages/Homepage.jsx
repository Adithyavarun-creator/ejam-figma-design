import React from "react";
import { Link } from "react-router-dom";
import { HompepageStyles } from "../styles/HomepageStyles";

const Homepage = () => {
  return (
    <>
      <HompepageStyles>
        <div className="homepage-box">
          <span>click on the button below&nbsp;</span>
          <Link className="link-box" to="/desktop-view">
            To view Application in 1500px desktop screen and keep your browser
            in 1500px width
          </Link>
        </div>
        <div className="homepage-box">
          <span>click on the button below&nbsp;</span>
          <Link className="link-box" to="/mobile-view">
            To view Application in 360px-500px and keep your browser with 360px
            width
          </Link>
        </div>
      </HompepageStyles>
    </>
  );
};

export default Homepage;
