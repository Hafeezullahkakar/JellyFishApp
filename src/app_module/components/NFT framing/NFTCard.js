/** @format */

import React from "react";
import "./nftcard.css";
import logo from "../../../site_module/assests/logo.png";
import versus from "../../app_assets/NFT farming/versus.png";
import Video from "react-responsive-video";

function NFTCard({ nft_name, xs, apy, stack, bmarsEarned, vid1, vid2 }) {
  return (
    <div className="cardWrapper">
      <div className="cardTop">
        <div className="cardName_logo">
          <img src={logo} alt="logo" width="40" height="40" />
          <p>{nft_name}</p>
        </div>
        <img src={xs} alt="xs" className="xs" />
      </div>
      <div className="VideoDiv">
        <Video
          loop
          muted
          mp4={vid1}
          className="videos"
          width="100"
          height="160"
        />
      </div>
      <img className="verses" src={versus} alt='' />
      <div className="VideoDiv">
        <Video
          loop
          muted
          mp4={vid2}
          className="videos"
          width="100"
          height="160"
        />
      </div>
      <div className="description">
        <div className="line1">
          <p className="red">
            APY <sup>(?)</sup>
          </p>
          <p className="red">{apy}</p>
        </div>
        <div className='line'>
            <p>Desposit</p>
            <p>Kirin NFT</p>
        </div>
        <div className='line'>
            <p>Earn BMARS</p>
            <p>Kirin NFT</p>
        </div>
        <div className='line'>
            <p>You Stacked</p>
            <p>{stack}</p>
        </div>
        <div className="line1">
          <p className="red">
            BMARS Earned <sup>(?)</sup>
          </p>
          <p className="red">{bmarsEarned}</p>
        </div>
        <button className='Approve'>Aprrove</button>
      </div>
    </div>
  );
}

export default NFTCard;
