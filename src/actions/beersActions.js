import * as types from "./actionTypes";
import axios from "axios";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";

export function getAllBeersSuccess(payload) {
  return { type: types.GET_ALL_BEERS_SUCCESS, payload };
}

// async call functions
export function getAllBeers() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return axios
      .get("http://23.20.62.209:3000/beers")
      .then(response => {
        let payload = response.data;
        dispatch(getAllBeersSuccess(payload));
      })
      .catch(error => {
        dispatch(ajaxCallError);
        throw error;
      });
  };
}
