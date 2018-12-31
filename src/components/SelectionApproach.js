import React from "react";
import PropTypes from "prop-types";
import UnionType from "./UnionType";

const SelectionApproach = props => {
  let { showAll, unionIsAnd, clickSelectionButton } = props;
  return (
    <>
      <div className="row">
        <h2>Beer Selection Approach</h2>
      </div>
      <div className="row">
        <div
          className="col-md-5"
          id={showAll ? "selection_button" : "selection_button_selected"}
          onClick={() => {
            clickSelectionButton("filter");
          }}
        >
          Filter The Beers
        </div>
        <div className="col-md-2" />
        <div
          className="col-md-5"
          id={showAll ? "selection_button_selected" : "selection_button"}
          onClick={() => {
            clickSelectionButton("all");
          }}
        >
          Show All The Beers
        </div>
        <div className="row">
          {showAll ? (
            ""
          ) : (
            <UnionType
              unionIsAnd={unionIsAnd}
              clickSelectionButton={clickSelectionButton}
            />
          )}
        </div>
      </div>
    </>
  );
};

SelectionApproach.propTypes = {
  showAll: PropTypes.bool.isRequired,
  unionIsAnd: PropTypes.bool
};

export default SelectionApproach;
