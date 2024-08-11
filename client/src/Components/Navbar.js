import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">Logo here</div>
      <div className="middle">
        <h1>
          StockScope: <span class="tagline">Tune in to Memories</span>
        </h1>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Navbar;
