import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./page/home";
import Counter from "./components/counter";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={props => <Home {...props} />} />
        <Route
          exact
          path="/counter"
          component={props => <Counter {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}
