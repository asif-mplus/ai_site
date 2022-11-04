import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-links-container">
        <div className="nav-flex">
          <div className="navbar-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar-section-links-container">
            <a href="#home">Home</a>
            <a href="#what">What is GPT?</a>
            <a href="#open">Open AI</a>
            <a href="#">Case Studies</a>
            <a href="#">Library</a>
          </div>
        </div>
        <div className="navbar-sign-links-container">
          <a href="">Sign In</a>
          <button type="button">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
