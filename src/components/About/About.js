import React from "react";
import "./About.css";
import FaGithub from "react-icons/lib/fa/github";
import FaMail from "react-icons/lib/fa/envelope";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <h2 className="about-header">About Me</h2>
        <div className="about-text">
          <p>
            I’m a former wine guy turned web developer. I left the wine business
            to take some time to travel and found myself in web development. I
            love programming and the endless possibilities (and challenges!)
            that come with it.
          </p>
          <p>
            I currently work mostly with the MERN stack (MongoDB, Express,
            React, Node), but am always looking forward to learning new
            languages and technologies.
          </p>
          <p>
            I hope to utilize my diverse skill set to build applications that
            find a balance between people and product.
          </p>
          <p>Thanks for stopping by and feel free to reach out! Cheers!</p>
        </div>
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
