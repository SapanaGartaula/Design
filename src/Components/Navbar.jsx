import React from 'react';
import eDex from "../assets/eDex.png";
import "./Navbar.css";
import { PiLockKey } from "react-icons/pi";
import { useState } from 'react';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="main">
              <img src={eDex} alt="Logo" className="logo" />
      
              <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? "✖" : "☰"}
              </div>
      
              <div className={`nav ${menuOpen ? "show" : ""}`}>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Course</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="last">
                <PiLockKey className="key" />
                <li className="name">Login</li>
                <button className="last1">Sign up for Free</button>
              </div>
            </div>
            </>
  )
}

export default Navbar;
