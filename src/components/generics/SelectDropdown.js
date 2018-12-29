import React from "react";
import PropTypes from "prop-types";

const SelectDropdown = props => {
  let { selections, onChange, selected, name, label } = props;
  selections = ["-", ...selections];
  return (
    <>
      <label className="select__label" htmlFor={name}>
        {label}
      </label>
      <select
        value={selected}
        onChange={onChange}
        id={name}
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
    </>
  );
};

SelectDropdown.propTypes = {
  selections: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default SelectDropdown;
