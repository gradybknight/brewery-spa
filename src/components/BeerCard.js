import React from "react";
import PropTypes from "prop-types";

const BeerCard = props => {
  let { id, breweryName, beerName, beerStyle, abv, ibu } = props.beer;
  return (
    <div className="beer_card" key={id}>
      <h3>
        {breweryName} {beerName}
      </h3>
      <p>
        Description: {beerStyle} abv: {abv}, ibu: {ibu}
      </p>
    </div>
  );
};

BeerCard.propTypes = {
  beers: PropTypes.object
};

export default BeerCard;
