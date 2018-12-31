import React from "react";
import PropTypes from "prop-types";

const SelectionApproach = props => {
  let { unionIsAnd, clickSelectionButton } = props;
  return (
    <>
      <div className="row">
        <h3>Combine selection criteria as:</h3>
      </div>
      <div
        className="col-md-5"
        id={unionIsAnd ? "selection_button" : "selection_button_selected"}
        onClick={() => {
          clickSelectionButton("or");
        }}
      >
        OR ||
      </div>
      <div className="col-md-2" />
      <div className="row">
        <div
          className="col-md-5"
          id={unionIsAnd ? "selection_button_selected" : "selection_button"}
          onClick={() => {
            clickSelectionButton("and");
          }}
        >
          AND &&
        </div>
      </div>
    </>
  );
};

SelectionApproach.propTypes = {
  unionIsAnd: PropTypes.bool.isRequired
};

export default SelectionApproach;
