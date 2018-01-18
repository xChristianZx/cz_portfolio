import React from "react";
import "./Home.css";
import FaProfile from "react-icons/lib/md/account-circle";
import About from "../About/About";

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-img-wrapper">
        <FaProfile />
      </div>
      <h1>Hey, I'm Christian</h1>
      <p>A front-end Web Developer based in the San Francisco Bay Area</p>
      <hr />
      <div>
        <About />
      </div>
    </div>
  );
};

export default Home;
