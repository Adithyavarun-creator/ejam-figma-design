import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="homepage-container">
        <div className="">
          <span>click on the button &nbsp;</span>
          <Link className="link-box" to="/desktop-view">
            To view Application in 1500px desktop screen and keep your browser
            in 1500px
          </Link>
        </div>
        <div>
          <span>click on the button &nbsp;</span>
          <Link className="link-box" to="/mobile-view">
            To view Application in 360px-500px and keep your browser with 360px
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
