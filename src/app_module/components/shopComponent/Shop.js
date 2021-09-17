/** @format */

import React from "react";
import "./shop.css";
function Shop({ title, imoji, desc, desc2, img }) {
  return (
    <div className="shopBar">
      <div className="shopComponent">
        <h1>
          {title} {imoji}
        </h1>
        <p>{desc}</p>
        {desc2 ? (
          <div className="desc2">
            <p>{desc2}</p>{" "}
          </div>
        ) : (
          ""
        )}

        <img src={img} alt="" className="shopbg" />
      </div>
    </div>
  );
}

export default Shop;
