/** @format */

import React, { useState } from "react";
import NavbarApp from "../app navbar/NavbarApp";
import BattleField from "../components/battleField/BattleField";
import LockedStacking from "../components/lockedStacking/LockedStacking";
import Shoppage from "../components/shoppage/Shoppage";
import Sidebar from "../components/sidebar/Sidebar";
import Inventory from "../components/inventory/Inventory";
import NFTFraming from "../components/NFT framing/NFTFraming";
import Dragons from "../components/inventory/Dragons";
import Migration from "../components/inventory/Migration";
import Equipments from "../components/inventory/Equipments";
import MarkeplaceEquipment from "../components/marketplace/MarkeplaceEquipment";
import MarkeplaceDragons from "../components/marketplace/MarkeplaceDragons";
import More from "../components/more/More";
import { Switch, Route } from "react-router-dom";
import "./homepageapp.css";
function Homepage_app() {
  const [showSideBar, setShowSidebar] = useState(true);
  const toggleSidebar = () => setShowSidebar(!showSideBar);

  return (
    <div className="homepageapp">
      <NavbarApp />
      <div className="appPage">
        <Sidebar />
        <Switch>
          <Route exact path="/shop" component={Shoppage} />
        </Switch>
        <Switch>
          <Route exact path="/inventory" component={Inventory} />
        </Switch>
        <Switch>
          <Route exact path="/inventory/dragons" component={Dragons} />
        </Switch>
        <Switch>
          <Route exact path="/inventory/migration" component={Migration} />
        </Switch>
        <Switch>
          <Route exact path="/inventory/equipments" component={Equipments} />
        </Switch>

        <Switch>
          <Route
            exact
            path="/marketplace/dragons"
            component={MarkeplaceDragons}
          />
        </Switch>
        <Switch>
          <Route
            exact
            path="/marketplace/equipments"
            component={MarkeplaceEquipment}
          />
        </Switch>
        <Switch>
          <Route exact path="/nftfarming" component={NFTFraming} />
        </Switch>
        <Switch>
          <Route exact path="/battlefield" component={BattleField} />
        </Switch>
        <Switch>
          <Route exact path="/lockedstacking" component={LockedStacking} />
        </Switch>
        <Switch>
          <Route exact path="/more" component={More} />
        </Switch>
      </div>
    </div>
  );
}

export default Homepage_app;
