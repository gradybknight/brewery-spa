import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import BeerSelection from "./containers/BeerSelection";
import BeerManagment from "./containers/BeerManagement";
import TapManagment from "./containers/TapManagement";
import Nav from "./containers/Nav";

function Routes() {
  return (
    <Router>
      <>
        <Nav />
        <div className="body">
          <Route path="/" exact component={BeerSelection} />
          <Route path="/beerManagement" component={BeerManagment} />
          <Route path="/tapManagement" component={TapManagment} />
        </div>
      </>
    </Router>
  );
}

export default Routes;
