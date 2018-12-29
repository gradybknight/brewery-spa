import { combineReducers } from "redux";
import beers from "./beersReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";
import breweries from "./breweriesReducer";
import beerStyles from "./beerStylesReducer";

const rootReducer = combineReducers({
  beers,
  ajaxCallsInProgress,
  breweries,
  beerStyles
});

export default rootReducer;
