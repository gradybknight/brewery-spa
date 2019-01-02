import { combineReducers } from "redux";
import beers from "./beersReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";
import breweries from "./breweriesReducer";
import beerStyles from "./beerStylesReducer";
import menu from "./menuReducer";

const rootReducer = combineReducers({
  beers,
  ajaxCallsInProgress,
  breweries,
  beerStyles,
  menu
});

export default rootReducer;
