import React from "react";
import "./About.css";
import FaGithub from "react-icons/lib/fa/github";
import FaMail from "react-icons/lib/fa/envelope";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <h2 className="about-header">About Me</h2>
        <h4 className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut libero
          sem, vulputate eget vehicula eu, cursus et ligula. Suspendisse
          bibendum pretium magna, ut vulputate nibh vehicula quis. Etiam
          aliquet, mi vel vulputate accumsan, dui magna iaculis justo, eget
          venenatis tellus mi varius mauris. Nam sodales quam vitae ultricies
          congue. Donec erat risus, blandit vel purus vitae, ultricies lacinia
          est. Donec molestie dolor urna, nec finibus nulla venenatis vitae.
          Aenean tempor, lectus nec luctus rutrum, ex lectus fringilla risus,
          nec vulputate orci magna sed massa. Quisque at turpis leo. Nam neque
          arcu, condimentum ac fermentum in, faucibus ac lectus. In dapibus
          risus risus, non ornare purus commodo vel.
        </h4>
      </div>
      <div className="contact-container">
        <h2 className="about-header">Contact</h2>
        <div className="links-container">
          <a
            className="link-item"
            href="mailto:cazenaty@gmail.com"
            rel="noopener noreferrer"
            title="Link to Email"
          >
            <FaMail /> <span className="link-name">Email</span>
          </a>
          <a
            className="link-item"
            href="https://github.com/xChristianZx"
            target="_blank"
            rel="noopener noreferrer"
            title="Link to Github"
          >
            <FaGithub /> <span className="link-name">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
