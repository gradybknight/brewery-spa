import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/beersActions";
import BeersList from "../components/BeerList";
import SelectDropdown from "../components/generics/SelectDropdown";

export class BeerSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBreweries: [],
      dropdownBrewery: "-",
      dropDownStyles: "-"
    };
  }

  formatKeyWordDictionaryForDropdown = () => {
    let keyWords = Object.keys(this.props.beerStyles);
    return keyWords;
  };

  breweryDropDownChange = event => {
    this.setState({
      dropdownBrewery: event.target.value,
      selectedBreweries: [...this.state.selectedBreweries, event.target.value]
    });
  };
  keyWordsDropDownChange = event => {
    console.log(event.target.value);
    this.setState({
      dropDownStyles: event.target.value,
      selectedBreweries: [
        ...this.state.selectedBreweries,
        ...this.props.beerStyles[event.target.value]
      ]
    });
  };

  render() {
    let keyWords = Object.keys(this.props.beerStyles);
    return (
      <>
        <SelectDropdown
          selections={this.props.breweries}
          onChange={this.breweryDropDownChange}
          selected={this.state.dropdownBrewery}
          label="Breweries"
          name="breweries"
        />
        <SelectDropdown
          selections={keyWords}
          onChange={this.keyWordsDropDownChange}
          selected={this.state.dropDownStyles}
          label="Key Words"
          name="keyWords"
        />
        <BeersList beers={this.props.beers} />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

BeerSelection.propTypes = {
  beers: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerSelection);
