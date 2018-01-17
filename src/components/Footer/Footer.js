import React from "react";
import "./Footer.css";
import FaGithub from "react-icons/lib/fa/github";
import FaMail from "react-icons/lib/fa/envelope";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <h4>Christian Zenaty</h4>
        <div className="icons-container">
          <a href="mailto:cazenaty@gmail.com" >
            <FaMail />
          </a>
          <a href="https://github.com/xChristianZx" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
