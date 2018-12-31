import React from "react";
import PropTypes from "prop-types";

const NumericRangeSelector = props => {
  let { title, lowValue, highValue, onChange } = props;

  return (
    <div>
      <div className="row">
        <h4>{title}</h4>
      </div>
      <div className="row">
        {/* <div className="col-lg-3">Low</div>
        <div className="col-lg-3"> */}
        low
        <input name={lowValue} onChange={onChange} value={lowValue} />
        {/* </div>
        <div className="col-lg-3">High</div>
        <div className="col-lg-3"> */}
        high
        <input name={highValue} onChange={onChange} value={highValue} />
        {/* </div> */}
      </div>
    </div>
  );
};

NumericRangeSelector.propTypes = {};

export default NumericRangeSelector;
