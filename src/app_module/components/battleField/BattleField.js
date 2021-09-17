/** @format */

import React from "react";
import "./battleField.css";
import appstore from "../../app_assets/balttlefield/appstore.png";
import google from "../../app_assets/balttlefield/google.png";
import pc from "../../app_assets/balttlefield/pc.png";

function BattleField() {
  return (
    <div className="batteField">
      <div className="images">
        <a href="/">
          <img className="imgsapp" src={appstore} alt="appstor" />
        </a>
        <a href="/">
          <img className="imgs" src={google} alt="appstor" />
        </a>
        <div className="pcdiv">
          <a href="/">
            <img className="imgspc" src={pc} alt="appstor" />
          </a>
          <b>Play on web</b>
        </div>
      </div>
    </div>
  );
}

export default BattleField;
