import React, { Component } from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import FaCamera from "react-icons/lib/fa/camera-retro";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <span>
            <Link to="/">Christian Zenaty</Link>
          </span>
          <ul>
            <li>
              <NavLink exact to="/">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <a
                href="https://cz-photos.surge.sh/"
                target="_blank"
                title="Check out my photography work"
                rel="noopener noreferrer"
              >
                <FaCamera />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
