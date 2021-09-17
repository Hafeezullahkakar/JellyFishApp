/** @format */

import React from "react";
import "./nftframing.css";
import Shop from "../shopComponent/Shop";
import shopbg from "../../app_assets/shopCover.png";
import NFTCard from "./NFTCard";
import xs from "../../app_assets/NFT farming/1x.png";
import faerieVid1 from "../../app_assets/NFT farming/faerieVid1.mp4";
import faerieVid2 from "../../app_assets/NFT farming/faerieVid2.mp4";
import toothlessVid1 from "../../app_assets/NFT farming/toothlessVid1.mp4";
import toothlessVid2 from "../../app_assets/NFT farming/toothlessVid2.mp4";
import HornVid1 from "../../app_assets/NFT farming/HornVid1.mp4";
import HornVid2 from "../../app_assets/NFT farming/HornVid2.mp4";

function NFTFraming() {
  return (
    <div className="nftFraming">
      <Shop
        title="NFT FARMING 🧺"
        desc="Nurture the dragons and earn rewards."
        img={shopbg}
      />

      <div className="cardArea">
        <NFTCard
          className="singleCard"
          nft_name="Faerie"
          xs={xs}
          apy="914"
          stack="0"
          bmarsEarned="0"
          vid1={faerieVid1}
          vid2={faerieVid2}
        />
        <NFTCard
          className="singleCard"
          nft_name="Toothless"
          xs={xs}
          vid1={toothlessVid1}
          apy="914"
          stack="0"
          vid2={toothlessVid2}
        />
        <NFTCard
          className="singleCard"
          nft_name="Horn"
          xs={xs}
          vid1={HornVid1}
          apy="914"
          stack="0"
          vid2={HornVid2}
        />

        {/* <NFTCard className='singleCard' nft_name="Faerie" xs={xs} vid1={vid1} vid2={vid2} /> */}
      </div>
    </div>
  );
}

export default NFTFraming;
