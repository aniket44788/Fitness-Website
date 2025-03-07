import React, { useState } from "react";
import "../Navbar/Navbar.css";
import box from "../Navbar/box.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="Name"> 
      <img src={box} className="name-box"/>
        <h4 className="name-h4">  ANIKET BHARDWAJ </h4>
      </div>
      <div className="heading-1">
        <h5 className="heading-1-h3" > About </h5>
        <h5 className="heading-1-h3" > Resume </h5>
        <h5 className="heading-1-h3" > Projects </h5>
        <h5 className="heading-1-h3" > Contact </h5>
      </div>
    </nav>
  );
};

export default Navbar;
