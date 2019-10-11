/* import React, { Component } from "react"; */
import React from "react";
/* stateless functional components */
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

/* class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
          Navbar
        </a>
      </nav>
    );
  }
} */

export default NavBar;
