import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function purchaseReducer(
  state = initialState.beerStyles,
  action
) {
  switch (action.type) {
    case types.GET_UNIQUE_STYLES:
      return action.payload;
    default:
      return state;
  }
}
