import React from "react";
import PropTypes from "prop-types";

const BeerCard = props => {
  let { id, breweryName, beerName, beerStyle, abv, ibu } = props.beer;
  let { listLocation, beerCardCheckmarkClicked } = props;
  let showButton = true;
  showButton = listLocation === "results" || listLocation === "menuManagement";
  return (
    <div className="beer__card" key={id}>
      <div className="beer__name">{beerName}</div>
      <div className="brewery__name">{breweryName}</div>
      <div className="beer__description">
        Description: {beerStyle} abv: {abv}, ibu: {ibu}
      </div>
      {showButton ? (
        listLocation === "results" ? (
          <div
            className="choose__beer"
            onClick={() => {
              beerCardCheckmarkClicked("addToBarMenu", id);
            }}
          >
            &#10003;
          </div>
        ) : (
          <div
            className="choose__beer"
            onClick={() => {
              beerCardCheckmarkClicked("removeFromMenu", id);
            }}
          >
            x
          </div>
        )
      ) : (
        ""
      )}
    </div>
  );
};

BeerCard.propTypes = {
  beers: PropTypes.object
};

export default BeerCard;

//
