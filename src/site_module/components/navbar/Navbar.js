/** @format */

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/logo.png";
import Button from "../button/Button";
import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navBarLeft">
        <img src={logo} alt="logo" width="50" height="50" />
        <h2 className="siteName">
          <a href="/">BINAMARS </a>
        </h2>
      </div>
      <div className="navBarRight">
        <div className="btnSection">
          <Button
            title="Buy BMARS"
            link="https://pancakeswap.finance/swap#/swap?outputCurrency=0x46880afc2E6FA41bBbE9787c082f7c23F795465E"
          />
          <Link to="/shop">
            <Button title="Launch App" link="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
