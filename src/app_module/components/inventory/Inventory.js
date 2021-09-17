/** @format */

import React from "react";
import "./inventory.css";
import Dragons from "./Dragons";
import Migration from "./Migration";
import Equipments from "./Equipments";
import { Switch, Route } from "react-router-dom";
import './inventory.css'

function Inventory() {
  return (
    <div className="inventory">
      <Switch>
        <Route exact  path="/dragons" component={Dragons}></Route>
      </Switch>
      <Switch>
        <Route exact path="/migration" component={Migration}></Route>
      </Switch>
      <Switch>
        <Route
          exact
          path="/equiptment"
          component={Equipments}
        ></Route>
      </Switch>
    </div>
  );
}

export default Inventory;
