import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <h1>Pomodoro</h1>
      </div>
      <ul className="nav-links">
        <ul>
          <Link to="/">home</Link>
        </ul>
        <ul>
          <Link to="/about">about</Link>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
