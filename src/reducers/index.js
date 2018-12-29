import { combineReducers } from "redux";
import beers from "./beersReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";
import breweries from "./breweriesReducer";

const rootReducer = combineReducers({
  beers,
  ajaxCallsInProgress,
  breweries
});

export default rootReducer;
