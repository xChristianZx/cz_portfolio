import React, { Component } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

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
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
