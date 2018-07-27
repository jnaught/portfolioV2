import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Restaurant from "./Components/Restaurant/RestaurantComponents/Restaurant/Restaurant";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/restaurant" component={Restaurant} />
  </Switch>
);
