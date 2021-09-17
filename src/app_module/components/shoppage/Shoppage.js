/** @format */

import React from "react";
// import "./shoppage.css";
import shopbg from "../../app_assets/shopCover.png";
import CardComponent from "../cardApp/CardComponent";
import ancient from "../../app_assets/ancient.gif";
import holysword from "../../app_assets/holy-sword.png";
import soulblade from "../../app_assets/soul-blade.png";
import healthbag from "../../app_assets/health-bag-1.png";
import healthbag2 from "../../app_assets/health-bag-2.png";
import binaArmout from "../../app_assets/bina-armor.png";
import MarsArmour from "../../app_assets/mars-armor.png";
import lasinShoe from "../../app_assets/lisin-shoes.png";
import fennikshoe from "../../app_assets/fennik-shoes.png";
import Shop from "../shopComponent/Shop";
// import Inventory from "../inventory/Inventory";

function Shoppage() {
  return (
    <div className="shopBar">
      <Shop
        title="SHOP"
        imoji="🏪"
        desc="All special items are only available here!"
        img={shopbg}
      />
      <div className="cards">
        <CardComponent img={ancient} title="Ancient Egg" amount="2,000" />
        <CardComponent img={holysword} title="Holy Sword" amount="500" />
        <CardComponent img={soulblade} title="Soul Blade" />
        <CardComponent img={healthbag} title="Health Bag1" amount="500" />
        <CardComponent img={healthbag2} title="Health Bag2" />
        <CardComponent img={healthbag} title="Health Bag1" />
        <CardComponent img={binaArmout} title="Bina Armor" amount="500" />
        <CardComponent img={MarsArmour} title="Mars Armor" />
        <CardComponent img={lasinShoe} title="Lisin Shoes" amount="500" />
        <CardComponent img={fennikshoe} title="Fennik Shoes" />
      </div>
    </div>
  );
}

export default Shoppage;
