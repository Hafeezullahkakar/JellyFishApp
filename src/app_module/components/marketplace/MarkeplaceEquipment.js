/** @format */

import React from "react";
import Shop from "../shopComponent/Shop";
import "./marketplace.css";
import shopcover from "../../app_assets/shopCover.png";
import NFTCard from "./Nft_Cards/NFTCard";
import HORN from "../../app_assets/NFTsAssests/HORN.mp4";

function MarkeplaceEquipment() {
  return (
    <div className="marketplace">
      <Shop
        title="Equipment"
        imoji="💸"
        desc="The right to sell and trade is totally owned by the player!"
        desc2="There is a small buy fee added to each transaction"
        img={shopcover}
      />
      <div className="buttonSection">
        <button className="all">All</button>
        <div className="twolines">
          <div className="babyDiv">
            <button className="babylineEqup">Holy <p> Sword </p></button>
            <button className="babylineEqup">Soul <p> Blade</p></button>
            <button className="babylineEqup">Health <p> Bag1</p></button>
            <button className="babylineEqup">Health <p> Bag2</p></button>
            <button className="babylineEqup">Bina <p> Armor</p></button>
            <button className="babylineEqup">Mars <p> Armor</p></button>
            <button className="babylineEqup">Lisin <p> Shoes</p></button>
            <button className="babylineEqup">Fennik <p> Shoes</p></button>
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

export default MarkeplaceEquipment;
