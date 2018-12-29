import React from "react";
import PropTypes from "prop-types";
import BeerCard from "./BeerCard";

const BeerList = props => {
  let { beers } = props;
  if (!beers) {
    beers = [];
  }
  return (
    <div>
      {beers.map((beer, index) => {
        return <BeerCard key={index} beer={beer} />;
      })}
    </div>
  );
};

BeerList.propTypes = {
  beers: PropTypes.array
};

export default BeerList;
