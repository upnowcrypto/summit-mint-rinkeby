import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import MintMain from "./pages/MintMain/MintMain";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Homepage />
        </Route>
        <Route path="/MintMain" exact={true}>
          <MintMain />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
