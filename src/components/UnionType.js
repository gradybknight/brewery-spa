import React from "react";
import PropTypes from "prop-types";

const UnionType = props => {
  let { unionIsAnd, clickSelectionButton } = props;
  return (
    <>
      <div className="row__card__headline">Combine selection criteria as:</div>
      <div
        id={unionIsAnd ? "selection_button" : "selection_button_selected"}
        onClick={() => {
          clickSelectionButton("or");
        }}
      >
        OR
      </div>
      <div
        id={unionIsAnd ? "selection_button_selected" : "selection_button"}
        onClick={() => {
          clickSelectionButton("and");
        }}
      >
        AND
      </div>
    </>
  );
};

UnionType.propTypes = {
  unionIsAnd: PropTypes.bool.isRequired
};

export default UnionType;
