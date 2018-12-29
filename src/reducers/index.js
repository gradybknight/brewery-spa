import { combineReducers } from "redux";
import beers from "./beersReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";

const rootReducer = combineReducers({
  beers,
  ajaxCallsInProgress
});

export default rootReducer;
