import * as types from "./actionTypes";
import axios from "axios";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";
const beersTransformations = require("../api/beersTransformations");

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
        const uniqueBreweries = beersTransformations.getUniqueBreweryNames(
          payload
        );
        dispatch({
          type: types.GET_UNIQUE_BREWERIES,
          payload: uniqueBreweries
        });
        dispatch(getAllBeersSuccess(payload));
      })
      .catch(error => {
        dispatch(ajaxCallError);
        throw error;
      });
  };
}
