import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/">CZ</NavLink>
          </li>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
