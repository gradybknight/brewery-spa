import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import BeerSelection from "./containers/BeerSelection";
import BeerManagment from "./containers/BeerManagement";
import Nav from "./containers/Nav";

function Routes() {
  return (
    <Router>
      <>
        <Nav />
        <div className="body">
          <Route path="/" exact component={BeerSelection} />
          <Route path="/beerManagement" component={BeerManagment} />
        </div>
      </>
    </Router>
  );
}

export default Routes;
