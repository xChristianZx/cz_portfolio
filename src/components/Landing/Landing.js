import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-container">
      <h1>Christian Zenaty</h1>
      <div className="landing-links">
        <Link to={"/home"}>
          <h2>Web Developer</h2>
        </Link>
        <Link to={"/photography"}>
          <h2>Photographer</h2>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
