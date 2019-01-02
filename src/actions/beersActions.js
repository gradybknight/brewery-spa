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
        const uniqueStyles = beersTransformations.makeDictionaryOfKeyWords(
          payload
        );
        dispatch({
          type: types.GET_UNIQUE_STYLES,
          payload: uniqueStyles
        });
        dispatch(getAllBeersSuccess(payload));
      })
      .catch(error => {
        dispatch(ajaxCallError);
        throw error;
      });
  };
}

export function getMenuSuccess(payload) {
  return { type: types.GET_MENU_SUCCESS, payload };
}

// async call functions
export function getMenu(beers) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return axios
      .get("http://23.20.62.209:3000/menu")
      .then(response => {
        let strBarMenuIDs = response.data[0].menu;
        let barMenuIDs = strBarMenuIDs.split("|");
        let barMenu = [];
        if (beers) {
          barMenuIDs.forEach(menuID => {
            let matchingBeer = beers.filter(beer => beer.id === menuID / 1);
            barMenu.push(matchingBeer[0]);
          });
        }
        dispatch(getMenuSuccess(barMenu));
      })
      .catch(error => {
        dispatch(ajaxCallError);
        throw error;
      });
  };
}

function wroteToDatabaseSuccessfully() {
  return { type: types.MENU_WRITE_SUCCESS, payload: {} };
}

export function updateMenu(strMenuIDs, beers) {
  let newMenu = { menu: strMenuIDs };
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return axios
      .post("http://23.20.62.209:3000/updatemenu", newMenu)
      .then(response => {
        wroteToDatabaseSuccessfully();
        dispatch(getMenu(beers));
      })
      .catch(error => {
        dispatch(ajaxCallError);
        throw error;
      });
  };
}
