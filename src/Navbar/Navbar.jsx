import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>
      <div className="heading-1">
        <h3> Home </h3>
        <h3> Service </h3>
        <h3> About </h3>
        <h3> Contact </h3>
      </div>
    </nav>
  );
};

export default Navbar;
