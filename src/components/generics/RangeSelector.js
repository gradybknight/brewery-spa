import React from "react";
import PropTypes from "prop-types";

const RangeSelector = props => {
  let {
    title,
    lowLimit,
    lowName,
    highLimit,
    highName,
    increments,
    lowValue,
    highValue,
    onChangeLow,
    onChangeHigh,
    selectionConfirmClick
  } = props;
  let selections = [];
  let step = (highLimit - lowLimit) / increments;
  for (let i = lowLimit; i <= highLimit; i += step) {
    selections.push(i);
  }

  return (
    <>
      <div className="row">
        <h3>{title}</h3>
      </div>
      <div className="row">
        <div className="col-md-5">
          <label className="select__label">Low:</label>
          <select
            value={lowValue}
            onChange={onChangeLow}
            id={lowName}
            className="select__box"
          >
            {selections.map((selection, index) => {
              return (
                <option key={index + 9} value={selection}>
                  {selection}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-md-5">
          <label className="select__label">High:</label>
          <select
            value={highValue}
            onChange={onChangeHigh}
            id={highName}
            className="select__box"
          >
            {selections.map((selection, index) => {
              return (
                <option key={index} value={selection}>
                  {selection}
                </option>
              );
            })}
          </select>
        </div>
        <div className="check__mark col-md-2" onClick={selectionConfirmClick}>
          &#10003;
        </div>
      </div>
    </>
  );
};

RangeSelector.propTypes = {
  title: PropTypes.string,
  lowLimit: PropTypes.number,
  highLimit: PropTypes.number,
  increments: PropTypes.number,
  lowValue: PropTypes.number,
  highValue: PropTypes.number,
  onChangeLow: PropTypes.func,
  onChangeHigh: PropTypes.func,
  selectionConfirmClick: PropTypes.func
};

export default RangeSelector;
