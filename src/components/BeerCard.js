import React from "react";
import PropTypes from "prop-types";

const BeerCard = props => {
  let { id, breweryName, beerName, beerStyle, abv, ibu } = props.beer;
  return (
    <div className="beer__card" key={id}>
      <div className="beer__name">{beerName}</div>
      <div className="brewery__name">{breweryName}</div>
      <div className="beer__description">
        Description: {beerStyle} abv: {abv}, ibu: {ibu}
      </div>
      <div className="choose__beer">&#10003;</div>
    </div>
  );
};

BeerCard.propTypes = {
  beers: PropTypes.object
};

export default BeerCard;
