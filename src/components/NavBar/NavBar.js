import React, { Component } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import FaCamera from "react-icons/lib/fa/camera-retro";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <span>
            <NavLink to="/">Christian Zenaty</NavLink>
          </span>
          <ul>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/photography" title="Check out my photography work">
                <FaCamera />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
