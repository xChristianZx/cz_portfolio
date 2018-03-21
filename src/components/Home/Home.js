import React from "react";
import "./Home.css";
import About from "../About/About";
import pic from "../../Assets/DSCF0210 copy-3264 x 4896-2.jpg";
import pic2 from "../../Assets/profile-pic4x3.jpg";
import pic3 from "../../Assets/profile-pic-400x400.jpg";
import pic4 from "../../Assets/profile-pic4x4.jpg";
const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-container">
        <div className="profile-img-wrapper">
          {/* <FaProfile /> */}
          <img className="headshot" src={pic4} alt="Christian Zenaty" />
        </div>
        <div className="greeting-wrapper">
          <h1>Hey, I'm Christian</h1>
          <p>A front-end Web Developer based in the San Francisco Bay Area</p>
        </div>
      </div>
      <hr />
      <About />
    </div>
  );
};

export default Home;
