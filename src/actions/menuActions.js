import * as types from "./actionTypes";
import axios from "axios";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";

export function getMenuSuccess(payload) {
  return { type: types.GET_ALL_BEERS_SUCCESS, payload };
}

// async call functions
export function getMenu() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return axios
      .get("http://23.20.62.209:3000/menu")
      .then(response => {
        let payload = response.data;
        dispatch(getMenuSuccess(payload));
      })
      .catch(error => {
        dispatch(ajaxCallError);
        throw error;
      });
  };
}

export function updateMenu(menuIDs) {
  return function(dispatch) {
    const strMenuIDs = JSON.stringify(menuIDs);
    dispatch(beginAjaxCall());
    return axios
      .post("http://23.20.62.209:3000/menu", strMenuIDs)
      .then(response => {
        let payload = response.data;
        dispatch(getMenuSuccess(payload));
      })
      .catch(error => {
        dispatch(ajaxCallError);
        throw error;
      });
  };
}
