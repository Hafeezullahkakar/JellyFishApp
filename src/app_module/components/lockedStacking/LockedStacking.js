/** @format */

import React, { useState } from "react";
import "./LockedStacking.css";
function LockedStacking() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="lockPage">
      <div className="Wrapper">
        <button onClick={handleClick} className="btn">
          View My Locked Stacking
        </button>
        {show ? (
          <div className="lockedStacks">
            <p>Reward</p>
            <p>Your Stack</p>
            <p>Stack Date</p>
            <p>Redemption Date</p>
            <div className="claim">
              <button disabled className="btn btngray">
                Claim
              </button>
              <p className="pClaim">You can only claim on redemption date</p>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="btnLine">
          <button className="dayBtn first">
            <p>7</p>
            <p>days </p>
          </button>
          <button className="dayBtn">
            <p>14 </p>
            <p>days </p>
          </button>
          <button className="dayBtn">
            <p>30 </p>
            <p>days </p>
          </button>
          <button className="dayBtn">
            <p>90 </p>
            <p>days </p>
          </button>
          <button className="dayBtn">
            <p>180 </p>
            <p>days </p>
          </button>
          <button className="dayBtn last">
            <p>365 </p>
            <p>days </p>
          </button>
        </div>

        <p className="lockAmoun">🔒 Lock Amount</p>
        <div className="btnInput">
          <input type="number" placeholder="0.00" />
          <div className="name_max">
            <p className="bmarsp">BMARS</p>
            <button className="maxBtn">MAX</button>
          </div>
        </div>
          
          <div className='summery'>
            <p>✍️ Summary</p>
            <div className='line'>
              <p>Stack Date</p>
              <p>Tue Sep 14 2021</p>
            </div>
            <div className='line'>
              <p>Redemption Date</p>
              <p>Tue Sep 14 2021</p>
            </div>
            <div className='line'>
              <p>ROI</p>
              <p>4.03%</p>
            </div>
            <div className='line'>
              <p>Total Reward</p>
              <p>0.00 BMARS</p>
            </div>
            <b>One Stake per Account</b>
            <p>The longer you stake the higher the ROI, however you wont be able to withdraw funds until the duration has passed.</p>
            <button className='btn approve'>Approve Stacking</button>
          </div>
      </div>
    </div>
  );
}

export default LockedStacking;
