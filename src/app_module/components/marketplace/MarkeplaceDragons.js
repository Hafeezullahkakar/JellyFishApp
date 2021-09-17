/** @format */

import React from "react";
import Shop from "../shopComponent/Shop";
import "./marketplace.css";
import shopcover from "../../app_assets/shopCover.png";
import NFTCard from "./Nft_Cards/NFTCard";
import HORN from "../../app_assets/NFTsAssests/HORN.mp4";

function MarkeplaceDragons() {
  return (
    <div className="marketplace">
      <Shop
        title="Dragons"
        imoji="💸"
        desc="The right to sell and trade is totally owned by the player!"
        desc2="There is a small buy fee added to each transaction"
        img={shopcover}
      />
      <div className="buttonSection">
        <button className="all">All</button>
        <div className="twolines">
          <div className="babyDiv">
            <button className="babyline">Baby Faerie</button>
            <button className="babyline">Baby Toothless</button>
            <button className="babyline">Baby Horn</button>
            <button className="babyline">Baby Kirin</button>
            <button className="babyline">Baby Mars</button>
          </div>
          <div className="adultDiv">
            <button className="adultline">Adult Faerie</button>
            <button className="adultline">Adult Toothless</button>
            <button className="adultline">Adult Horn</button>
            <button className="adultline">Adult Kirin</button>
            <button className="adultline">Adult Mars</button>
          </div>
        </div>
      </div>
      <div className="CardsArea">
        <NFTCard
          price="1,060"
          video={HORN}
          name="HORN"
          nftId="4082"
          exp="0/432,000"
        />
        <NFTCard
          price="1,060"
          video={HORN}
          name="HORN"
          nftId="4082"
          exp="0/432,000"
        />
        <NFTCard
          price="1,060"
          video={HORN}
          name="HORN"
          nftId="4082"
          exp="0/432,000"
        />
      </div>
      <h1>MAINTENANCE </h1>
      <button className="moreBtn">Load more</button>
    </div>
  );
}

export default MarkeplaceDragons;
