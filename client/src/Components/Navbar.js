import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <div className="row navbar">
      <div className="col-8 col-sm-8 menu">
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
      <div className="col-4 col-sm-4 search-bar">
        <SearchIcon></SearchIcon>
        <input type="text" placeholder="Search name or symbol"></input>
      </div>
    </div>
  );
}

export default Navbar;
