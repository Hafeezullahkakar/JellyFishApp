/** @format */

import React from "react";
import "./nft.css";
import logo from "../../../../site_module/assests/logo.png";
import Video from "react-responsive-video";
import faerieVid1 from "../../../app_assets/NFT farming/faerieVid1.mp4";

function NFTCard({ video, price, name, nftId, exp }) {
  return (

    <div className="nft_Card_wrapper">
      <div className="upper_card">
        <div className="logo_price">
          <img src={logo} alt="" className="logo" width="30" height="30" />
          <p className="nft_price">{price}</p>
        </div>
      </div>
      <div className="VideoDiv">
        <Video
          loop
          muted
          mp4={faerieVid1}
          className="videos"
          width="80"
          height="210"
        />
      </div>
      <div className="lower_card">
        <div className="name_id">
          <p>{name}</p>
          <p>NFT ID: {nftId}</p>
        </div>
        <p>EXP: {exp}</p>
      </div>
    </div>
  );
}

export default NFTCard;
