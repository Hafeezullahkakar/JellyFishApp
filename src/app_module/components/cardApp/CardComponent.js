/** @format */

import React from "react";
import "./cardCompt.css";
import logo from "../../../site_module/assests/logo.png";
function CardComponent({ img, title, amount }) {
  return (
    <>
    {amount ?  (
          <div className="card_wrapper">
          <div className="card">
            <img src={img} className="card_img" alt="" />
            <div className="desc">
              <p>{title}</p>
              <div className="logoAmount">
                <img src={logo} alt="" className="logo" width="30" height="30" />
                <p>{amount}</p>
              </div>
            </div>
          </div>
        </div>


    ): (
      <div className="card_wrapper2">
      <div className="card">
        <img src={img} className="card_img" alt="" />
        <div className="desc">
          <p>{title}</p>
          <div className="logoAmount">
            <p>DROP ONLY</p>
          </div>
        </div>
      </div>
    </div>


    )}

      </>
  );
}

export default CardComponent;
