import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import Routes from "./Routes";

import { getAllBeers } from "./actions/beersActions";

const store = configureStore();
store.dispatch(getAllBeers());

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
