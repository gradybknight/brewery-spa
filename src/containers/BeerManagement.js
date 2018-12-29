import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/beersActions";
import BeersList from "../components/BeerList";
import SelectDropdown from "../components/generics/SelectDropdown";

export class BeerManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownBrewery: "-",
      dropDownStyles: "-",
      selectedBeers: []
    };
  }

  formatKeyWordDictionaryForDropdown = () => {
    let keyWords = Object.keys(this.props.beerStyles);
    return keyWords;
  };

  breweryDropDownChange = event => {
    let brewerysBeersIDs = this.props.beers
      .filter(beer => {
        return beer.breweryName === event.target.value;
      })
      .map(beer => beer.id);
    this.setState({
      dropdownBrewery: event.target.value,
      selectedBeers: [...this.state.selectedBeers, ...brewerysBeersIDs]
    });
  };
  keyWordsDropDownChange = event => {
    console.log(event.target.value);
    this.setState({
      dropDownStyles: event.target.value,
      selectedBeers: [
        ...this.state.selectedBeers,
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

BeerManagement.propTypes = {
  beers: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerManagement);
