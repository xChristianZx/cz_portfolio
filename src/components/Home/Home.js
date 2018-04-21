import React from "react";
import "./Home.css";
import About from "../About/About";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="header-container">
        <div className="profile-img-container">
          <img
            className="headshot"
            src={
              "https://res.cloudinary.com/zenpicscloud/image/upload/v1521654129/profile_pics/profile-pic400x400-2.jpg"
            }
            alt="Christian Zenaty"
          />
        </div>
        <div className="greeting-container">
          <h1>Hey, I'm Christian</h1>
          <h4>A front-end Web Developer based in the San Francisco Bay Area</h4>
        </div>
      </div>
      <hr />
      <div>
        <About />
      </div>
    </div>
  );
};

export default Home;
