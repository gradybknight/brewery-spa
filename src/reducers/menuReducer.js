import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function purchaseReducer(state = initialState.menu, action) {
  switch (action.type) {
    case types.GET_MENU_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
