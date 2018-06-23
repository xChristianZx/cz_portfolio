import React from "react";
import "./Footer.css";
import FaGithub from "react-icons/lib/fa/github";
import FaMail from "react-icons/lib/fa/envelope";
import FaLinkedIn from "react-icons/lib/fa/linkedin-square";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <h3>Christian Zenaty</h3>
        <div className="icons-container">
          <a href="mailto:cazenaty@gmail.com" rel="noopener noreferrer">
            <FaMail />
          </a>
          <a
            href="https://github.com/xChristianZx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="link-item"
            href="https://www.linkedin.com/in/christianzenaty/"
            target="_blank"
            rel="noopener noreferrer"
            title="Link to LinkedIn"
          >
            <FaLinkedIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
