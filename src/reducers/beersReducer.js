import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function purchaseReducer(state = initialState.beers, action) {
  switch (action.type) {
    case types.GET_ALL_BEERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
