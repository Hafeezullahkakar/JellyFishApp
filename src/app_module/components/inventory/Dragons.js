/** @format */

import React from "react";
import Shop from "../shopComponent/Shop";
import shopbg from "../../app_assets/shopCover.png";
import "./inventory.css";

function Dragons() {
  return (
    <div className='inventory'>
      <Shop title="Dragons" imoji="🧳" img={shopbg} />
    </div>
  );
}

export default Dragons;
