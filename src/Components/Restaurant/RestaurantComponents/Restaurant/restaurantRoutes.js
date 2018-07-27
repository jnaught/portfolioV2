import React from "react";
import { Route, Switch } from "react-router-dom";

import Menu from "./Menu";

export default (
  <Switch>
    <Route path="/restaurant/Menu" component={Menu} />
  </Switch>
);
