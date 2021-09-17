/** @format */

import React from "react";
import Card from "../card/Card";
import farmer from "../../assests/farmer.png";
import earn from "../../assests/earn.png";
import marketplace from "../../assests/marketplace.png";
import deflation from "../../assests/deflation.png";
import "./features.css";

function Features() {
  return (
      <div className="FeaturesSection">
        <div className="Sectitle">
          <h1>Features</h1>
        </div>
        <div className="card">
          <Card
            pic={farmer}
            title="NFT Farming"
            desc="Stake your dragon NFT at the farm on Mars. It will generate BMARS tokens for you every block."
          />
          <Card
            pic={earn}
            title="Play to Earn"
            desc="Defeat invaders to win valuable items, sell these items for BMARS tokens to increase strength."
          />
          <Card
            pic={marketplace}
            title="Marketplace"
            desc="You can Buy or Sell the dragons gear to everyone on a decentralized NFT open market."
          />
          <Card
            pic={deflation}
            title="Deflation"
            desc="Each Sell transaction will be charged a 5% fee and would be automatically added to the Staking."
          />
        </div>
      </div>
  
  );
}

export default Features;
