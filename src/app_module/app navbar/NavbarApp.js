/** @format */

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../site_module/assests/logo.png";
import ButtonApp from "../components/button/ButtonApp";
import "./navbarapp.css";
function Navbar_app() {
  return (
    <div className="navbar">
      <div className="navBarLeft">
        <img src={logo} alt="logo" width="50" height="50" />
        <h2>BINAMARS</h2>
      </div>
      <div className="navbarCenter"></div>
      <div className="navBarRight">
        <ButtonApp title="Buy BMARS" />

       <Link to ='/' > <ButtonApp title="connect" /> </Link>
      </div>
    </div>
  );
}

export default Navbar_app;
