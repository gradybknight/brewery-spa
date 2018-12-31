import React from "react";
import PropTypes from "prop-types";
import BeerCard from "./BeerCard";

const BeerList = props => {
  let { beers, listLocation, beerCardCheckmarkClicked } = props;
  if (!beers) {
    beers = [];
  }
  return (
    <div>
      {beers.map((beer, index) => {
        return (
          <BeerCard
            key={index}
            beer={beer}
            listLocation={listLocation}
            beerCardCheckmarkClicked={beerCardCheckmarkClicked}
          />
        );
      })}
    </div>
  );
};

BeerList.propTypes = {
  beers: PropTypes.array
};

export default BeerList;
