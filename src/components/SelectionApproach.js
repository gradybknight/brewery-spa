import React from "react";
import PropTypes from "prop-types";

const SelectionApproach = props => {
  let { showAll, clickSelectionButton } = props;
  return (
    <>
      <div className="row__card__headline">Beer Selection Approach:</div>
      <div
        id={showAll ? "selection_button" : "selection_button_selected"}
        onClick={() => {
          clickSelectionButton("filter");
        }}
      >
        Filter The Beers
      </div>
      <div
        id={showAll ? "selection_button_selected" : "selection_button"}
        onClick={() => {
          clickSelectionButton("all");
        }}
      >
        Show All The Beers
      </div>
    </>
  );
};

SelectionApproach.propTypes = {
  showAll: PropTypes.bool.isRequired,
  unionIsAnd: PropTypes.bool
};

export default SelectionApproach;
