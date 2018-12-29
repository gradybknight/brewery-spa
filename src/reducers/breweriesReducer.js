import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function purchaseReducer(
  state = initialState.breweries,
  action
) {
  switch (action.type) {
    case types.GET_UNIQUE_BREWERIES:
      return action.payload;
    default:
      return state;
  }
}
