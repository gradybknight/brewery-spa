import React from "react";
import PropTypes from "prop-types";

const BeerCard = props => {
  let { id, breweryName, beerName, beerStyle, abv, ibu } = props.beer;
  return (
    <div className="beer_card" key={id}>
      <h2>{breweryName}</h2>
      <h3>{beerName}</h3>
      <h4>Description: {beerStyle}</h4>
      <h4>
        abv: {abv}, ibu: {ibu}
      </h4>
    </div>
  );
};

BeerCard.propTypes = {
  beers: PropTypes.object
};

export default BeerCard;
