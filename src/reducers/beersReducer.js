import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function purchaseReducer(state = initialState.beers, action) {
  switch (action.type) {
    case types.GET_ALL_BEERS_SUCCESS:
      return action.payload;
    case types.MENU_WRITE_SUCCESS:
      return state;
    default:
      return state;
  }
}
