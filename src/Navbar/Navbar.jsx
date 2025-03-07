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
        <h5 className="heading-1-h3" > ABOUT </h5>
        <h5 className="heading-1-h3" > RESUME </h5>
        <h5 className="heading-1-h3" > PROJECTS </h5>
        <h5 className="heading-1-h3" > CONTACT </h5>
      </div>
    </nav>
  );
};

export default Navbar;
