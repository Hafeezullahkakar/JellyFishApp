/** @format */

import React, { useState } from "react";
import "./sidebar.css";
import shop from "../../app_assets/Sidebar/shop.png";
import inventory from "../../app_assets/Sidebar/inventory.png";
import market from "../../app_assets/Sidebar/market.png";
import money from "../../app_assets/Sidebar/money.png";
import { Link } from "react-router-dom";

function Sidebar() {
  const [showInventory, setShowInventory] = useState(false);
  const [showMarketplace, setShowMarketplace] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [sidebar, setSidebar] = useState(true);

  const ToggleInventory = () => {
    setShowInventory(!showInventory);
  };
  const ToggleMarketplace = () => {
    setShowMarketplace(!showMarketplace);
  };
  const ToggleMore = () => {
    setShowMore(!showMore);
  };
  const toggeSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      {sidebar ? (
        <div className="ToggleSideBar">
          <i class="fas fa-angle-double-left" onClick={toggeSidebar}></i>
        </div>
      ) : (
        <div className="ToggleSideBar">
          <i class="fas fa-angle-double-right" onClick={toggeSidebar}></i>
        </div>
      )}

      {sidebar ? (
        <div className="sidebar">
          <div className="menuItems">
            <Link to="/" className="link">
              <div className="item">
                <img src={shop} alt="" width="25" height="25" />
                <p>Shop</p>
              </div>
            </Link>
            <div className="toggleInventory">
              <div className="item">
                <img src={inventory} alt="" width="25" height="25" />
                <p onClick={ToggleInventory}>Inventory</p>

                {showInventory ? (
                  <svg
                    className="svg"
                    viewBox="0 0 24 24"
                    color="text"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    class="sc-bdnxRM kDWlca"
                  >
                    <path d="M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z"></path>
                  </svg>
                ) : (
                  <svg
                    className="svg"
                    viewBox="0 0 24 24"
                    color="text"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    class="sc-bdnxRM kDWlca"
                  >
                    {" "}
                    <path d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"></path>
                  </svg>
                )}
              </div>
              {showInventory ? (
                <div className="inventory_subMenu">
                  <Link to="/inventory/dragons" className="link">
                    {" "}
                    <p>Dragons</p>
                  </Link>
                  <Link to="/inventory/migration" className="link">
                    {" "}
                    <p>Migration</p>{" "}
                  </Link>
                  <Link to="/inventory/equipments" className="link">
                    {" "}
                    <p>Equipment</p>{" "}
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="toggleInventory">
              <div className="item">
                <img src={market} alt="" width="25" height="25" />
                <p onClick={ToggleMarketplace}>Marketplace</p>

                {showMarketplace ? (
                  <svg
                    className="svg"
                    viewBox="0 0 24 24"
                    color="text"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    class="sc-bdnxRM kDWlca"
                  >
                    <path d="M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z"></path>
                  </svg>
                ) : (
                  <svg
                    className="svg"
                    viewBox="0 0 24 24"
                    color="text"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    class="sc-bdnxRM kDWlca"
                  >
                    {" "}
                    <path d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"></path>
                  </svg>
                )}
              </div>
              {showMarketplace ? (
                <div className="Marketplace_subMenu">
                  <Link to="/marketplace/dragons" className="link">
                    {" "}
                    <p>Dragons</p>
                  </Link>
                  <Link to="/marketplace/equipments" className="link">
                    {" "}
                    <p>Equipment</p>{" "}
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
            <Link to="/nftfarming" className="link">
              <div className="item">
                <img src={money} alt="" width="25" height="25" />
                <p>NFT Farming</p>
              </div>
            </Link>
            <Link to="/battlefield" className="link">
              <div className="item">
                <img
                  src="https://img.icons8.com/fluent/48/000000/battle.png"
                  alt=""
                  width="25"
                  height="25"
                />
                <p>Battlefield</p>
              </div>
            </Link>

            <Link to="/lockedstacking" className="link">
              <div className="item">
                <p>🏦 Lock Staking</p>
              </div>
            </Link>

            <Link to="/shop" className="link">
              <div className="item">
                {/* <img src={shop} alt="" width="25" height="25" /> */}
                <p>🎰 BiBet - Paused</p>
              </div>
            </Link>

            <Link to="/more" className="link">
              <div className="toggleInventory">
                <div className="item">
                  <img
                    src="https://img.icons8.com/office/16/000000/more.png"
                    alt=""
                    width="25"
                    height="25"
                  />
                  <p onClick={ToggleMore}>More</p>

                  {showMore ? (
                    <svg
                      className="svg"
                      viewBox="0 0 24 24"
                      color="text"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      class="sc-bdnxRM kDWlca"
                    >
                      <path d="M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z"></path>
                    </svg>
                  ) : (
                    <svg
                      className="svg"
                      viewBox="0 0 24 24"
                      color="text"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      class="sc-bdnxRM kDWlca"
                    >
                      {" "}
                      <path d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"></path>
                    </svg>
                  )}
                </div>
                {showMore ? (
                  <div className="inventory_subMenu">
                    <Link to="/more" className="link">
                      {" "}
                      <p>Docs</p>
                    </Link>
                    <Link to="/more" className="link">
                      {" "}
                      <p>Telegram</p>{" "}
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Sidebar;
