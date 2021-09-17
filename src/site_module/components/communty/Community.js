/** @format */

import React from "react";
import "./community.css";
import telegram from "../../assests/community/telegram.svg";
import telegram2 from "../../assests/community/telegram2.png";
import twitter from "../../assests/community/twitter.svg";
import gitbook from "../../assests/community/gitbook.png";

function Friends() {
  return (
    <div className="communitySection">
      <div className="Sectitle">
        <h1>Community</h1>
      </div>
      <div className="logosSection">
        <img className="singleIcon" src={telegram} alt="" />
        <img className="singleIcon" src={telegram2} alt="" />
        <img className="singleIcon" src={twitter} alt="" />
        <img className="singleIcon" src={gitbook} alt="" />
      </div>
    </div>
  );
}

export default Friends;
