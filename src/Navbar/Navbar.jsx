import React, { useState } from "react";
import "./Navbar.css";
import box from "../Navbar/box.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="Name"> 
      <img src={box} className="name-box"/>
        <h4 className="name-h4">  ANIKET BHARDWAJ </h4>
      </div>
      <div className="heading-1">
        <h3> About Me </h3>
        <h3> Resume </h3>
        <h3> Projects </h3>
        <h3> Contact </h3>
      </div>
    </nav>
  );
};

export default Navbar;
