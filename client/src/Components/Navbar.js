import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <div className="navbar">
      <div className="menu">
        <Link to="/" class="btn">
          Logo Here
        </Link>
        <div class="menu-items">
          <Link to="/" class="btn">
            Home
          </Link>
          <Link to="/about" class="btn">
            About
          </Link>
        </div>
      </div>
      <div className="search-bar">
        <SearchIcon></SearchIcon>
        <input type="text" placeholder="Search name or symbol"></input>
      </div>
    </div>
  );
}

export default Navbar;
