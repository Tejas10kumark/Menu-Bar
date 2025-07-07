import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Navigation bar</h2>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Career</a>
        </li>
        <li>
          <a href="#Services"></a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
