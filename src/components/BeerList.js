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
      <h1>All the beers you could imagine</h1>
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
