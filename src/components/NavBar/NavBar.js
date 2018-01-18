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
            <NavLink to="/">CZ</NavLink>
          </span>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/photography">
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
