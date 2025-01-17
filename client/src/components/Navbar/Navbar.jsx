import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from 'react';


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <nav className="navbar">
      <div className="brand-container">
        <Link className="navbar-brand" to="/">
          car <span>rental</span>
        </Link>
      </div>

      <div className="burger" id="burger" onClick={handleClick}>
        <span className={`burger-line ${isVisible ? 'active' :''}`}></span>
        <span className={`burger-line ${isVisible ? 'active' :''}`}></span>
        <span className={`burger-line ${isVisible ? 'active' :''}`}></span>
      </div>

      <div className={`link-container ${isVisible ? 'link-container-active' :'link-container-hidden'}`}>
        <Link className="nav-link active" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/models">
          Models
        </Link>
        <Link className="nav-link" to="/testimonials">
          Testimonials
        </Link>
        <Link className="nav-link" to="/team">
          Our team
        </Link>
        <Link className="nav-link" to="/contact">
          Contact us
        </Link>
        <div className="auth-container">
          <Link className="sign-up" to="/register">
            Sign up
          </Link>
          <Link className="log-in" to="/login">
            Login
          </Link>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
