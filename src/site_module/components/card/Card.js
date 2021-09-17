/** @format */

import React from "react";
import "./card.css";
function Card({ pic, title, desc }) {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="ItemsVertical">
          <img src={pic} alt="" width="70" height="70" />
          <p className="title">{title}</p>
          <p className="desc">{desc}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
