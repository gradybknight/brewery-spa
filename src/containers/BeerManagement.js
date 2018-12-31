import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/beersActions";
import BeersList from "../components/BeerList";
import SelectDropdown from "../components/generics/SelectDropdown";
import { filterByRestrictions } from "../api/beersTransformations";
import MessageBox from "../components/generics/MessageBox";
import NumericRangeSelector from "../components/generics/NumericRangeSelector";

export class BeerManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownBrewery: "-",
      dropDownStyles: "-",
      selectedBeers: [],
      restrictions: [],
      ibuHigh: "n/a",
      ibuLow: "n/a",
      abvHigh: "n/a",
      abvLow: "n/a",
      showFullList: false
    };
  }

  formatKeyWordDictionaryForDropdown = () => {
    let keyWords = Object.keys(this.props.beerStyles);
    return keyWords;
  };

  breweryDropDownChange = event => {
    if (event.target.value === "-") {
      this.setState({
        dropdownBrewery: event.target.value
      });
      return;
    }
    let restriction = {
      type: `brewery`,
      strTarget: event.target.value
    };
    let restrictions = [...this.state.restrictions, restriction];
    this.setState({
      dropdownBrewery: event.target.value,
      restrictions: [...this.state.restrictions, restriction]
    });
    this.showRestrictedBeers(restrictions);
  };

  keyWordsDropDownChange = event => {
    if (event.target.value === "-") {
      this.setState({
        dropDownStyles: event.target.value
      });
      return;
    }
    let restriction = {
      type: `word`,
      strTarget: event.target.value
    };
    let restrictions = [...this.state.restrictions, restriction];
    this.setState({
      dropDownStyles: event.target.value,
      restrictions: [...this.state.restrictions, restriction]
    });
    this.showRestrictedBeers(restrictions);
  };

  showRestrictedBeers = newRestrictions => {
    let restrictedBeers = filterByRestrictions(
      this.props.beers,
      this.props.beerStyles,
      newRestrictions
    );
    this.setState({
      selectedBeers: restrictedBeers
    });
  };

  removeRestriction = id => {
    let newRestrictions = this.state.restrictions.filter(
      (restriction, index) => {
        return index !== id / 1;
      }
    );
    this.showRestrictedBeers(newRestrictions);
    this.setState({
      restrictions: newRestrictions
    });
  };

  render() {
    let keyWords = Object.keys(this.props.beerStyles);
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="beer_selector col-lg-4">
              <h3>Selection Criteria</h3>
              <div className="row">
                <SelectDropdown
                  selections={this.props.breweries}
                  onChange={this.breweryDropDownChange}
                  selected={this.state.dropdownBrewery}
                  label="Breweries"
                  name="breweries"
                />
              </div>
              <div className="row">
                <SelectDropdown
                  selections={keyWords}
                  onChange={this.keyWordsDropDownChange}
                  selected={this.state.dropDownStyles}
                  label="Key Words"
                  name="keyWords"
                />
              </div>
              <div className="row">
                <NumericRangeSelector
                  title="ABV"
                  lowValue={this.state.abvLow}
                  highValue={this.state.abvHigh}
                  onChange={null}
                />
              </div>
              <div className="row">
                <NumericRangeSelector
                  title="IBU"
                  lowValue={this.state.ibuLow}
                  highValue={this.state.ibuHigh}
                  onChange={null}
                />
              </div>

              {this.state.restrictions.map((restriction, index) => {
                return (
                  <MessageBox
                    message={restriction.strTarget}
                    clickToRemove={this.removeRestriction}
                    key={index}
                    messageid={index}
                  />
                );
              })}
              <BeersList beers={this.props.beers} />
            </div>
            <div className="selection_results col-lg-4">
              <h3>Filtered Beers {`(${this.state.selectedBeers.length})`}</h3>
              <BeersList beers={this.state.selectedBeers} />
            </div>
            <div className="tap_selection col-lg-4">
              <h3>Tap Management</h3>
            </div>
          </div>
        </div>
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
