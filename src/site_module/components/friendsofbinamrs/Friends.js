/** @format */

import React from "react";
import "./friends.css";
import coingecko from "../../assests/friends/coingek.png";
import bsc from "../../assests/friends/bsc.webp";
import pancake from "../../assests/friends/pancake.png";
import logohh from "../../assests/friends/logohh.png";
import logoyy from "../../assests/friends/logoyy.png";

function Friends() {
  return (
    <div className="friendSection">
      <div className="Sectitle">
        <h1>Friends of Binamars</h1>
      </div>
      <div className="logosSection">
        <img className="singleLogo" src={coingecko} alt="" />
        <img className="singleLogo" src={bsc} alt="" />
        <img className="singleLogo" src={pancake} alt="" />
        <img className="singleLogo" src={logohh} alt="" />
        <img className="singleLogo" src={logoyy} alt="" />
      </div>
    </div>
  );
}

export default Friends;
