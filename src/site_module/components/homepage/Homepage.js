/** @format */

import React from "react";
import Navbar from "../navbar/Navbar";
import "./homepage.css";
import Button from "../button/Button";
import Friends from "../friendsofbinamrs/Friends";
import Community from "../communty/Community";
import Features from "../features/Features";

function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <div className="main_heading">
        <p>NFT games platform and decentralized yield farm applications</p>
        <p className="subHeading">
          Binamars Game is a Play to Earn NFT RPG developed on the Binance Smart
          Chain
        </p>
      </div>
      <div className="buttonsSection">
        <button className="breathinBtn">Chart</button>
        <Button title="Documentation" />
      </div>
      <div className="otherSections">
        <Features />
        <Friends />
        <Community />
      </div>
    </div>
  );
}

export default Homepage;
