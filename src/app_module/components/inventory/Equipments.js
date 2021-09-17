/** @format */

import React from "react";
import Shop from "../shopComponent/Shop";
import shopbg from "../../app_assets//shopCover.png";
import './inventory.css'

function Equipments() {
  return (
    <div className='inventory'>
      <Shop title="Equipments" imoji="🧳" img={shopbg} />
    </div>
  );
}

export default Equipments;
