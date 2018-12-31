import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/beersActions";
import BeersList from "../components/BeerList";
import SelectDropdown from "../components/generics/SelectDropdown";
import {
  filterByRestrictions,
  filterByRestrictionsUnion
} from "../api/beersTransformations";
import MessageBox from "../components/generics/MessageBox";
import RangeSelector from "../components/generics/RangeSelector";
import SelectionApproach from "../components/SelectionApproach";

export class BeerManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownBrewery: "-",
      dropDownStyles: "-",
      selectedBeers: [],
      restrictions: [],
      ibuHigh: 120,
      ibuLow: 0,
      abvHigh: 12,
      abvLow: 0,
      showAll: false,
      unionIsAnd: false
    };
  }

  clickSelectionButton = buttonClicked => {
    if (buttonClicked === "filter") {
      this.setState({
        showAll: false,
        selectedBeers: []
      });
    } else if (buttonClicked === "all") {
      this.setState({
        showAll: true,
        selectedBeers: this.props.beers,
        restrictions: []
      });
    } else if (buttonClicked === "and") {
      if (!this.state.unionIsAnd) {
        this.setState({
          showAll: false,
          unionIsAnd: true,
          selectedBeers: [],
          restrictions: []
        });
      }
    } else if (buttonClicked === "or") {
      if (this.state.unionIsAnd) {
        this.setState({
          showAll: false,
          unionIsAnd: false,
          selectedBeers: [],
          restrictions: []
        });
      }
    }
  };

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
    let restrictedBeers = [];
    if (this.state.unionIsAnd) {
      restrictedBeers = filterByRestrictionsUnion(
        this.props.beers,
        this.props.beerStyles,
        newRestrictions
      );
    } else {
      restrictedBeers = filterByRestrictions(
        this.props.beers,
        this.props.beerStyles,
        newRestrictions
      );
    }
    this.setState({
      selectedBeers: restrictedBeers,
      dropdownBrewery: "-",
      dropDownStyles: "-",
      ibuHigh: 120,
      ibuLow: 0,
      abvHigh: 12,
      abvLow: 0
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

  abvLowChange = event => {
    this.setState({
      abvLow: event.target.value / 1
    });
  };

  abvHighChange = event => {
    this.setState({
      abvHigh: event.target.value / 1
    });
  };

  abvCheckClicked = () => {
    let restriction = {
      type: `abv`,
      rangeLow: this.state.abvLow,
      rangeHigh: this.state.abvHigh,
      strTarget: `ABV: ${this.state.abvLow} - ${this.state.abvHigh}`
    };
    let restrictions = [...this.state.restrictions, restriction];
    this.setState({
      restrictions: [...this.state.restrictions, restriction],
      abvLow: "0",
      abvHigh: "12"
    });
    this.showRestrictedBeers(restrictions);
  };

  ibuLowChange = event => {
    this.setState({
      ibuLow: event.target.value / 1
    });
  };

  ibuHighChange = event => {
    this.setState({
      ibuHigh: event.target.value / 1
    });
  };

  ibuCheckClicked = () => {
    let restriction = {
      type: `ibu`,
      rangeLow: this.state.ibuLow,
      rangeHigh: this.state.ibuHigh,
      strTarget: `ibu: ${this.state.ibuLow} - ${this.state.ibuHigh}`
    };
    let restrictions = [...this.state.restrictions, restriction];
    this.setState({
      restrictions: [...this.state.restrictions, restriction],
      ibuLow: "0",
      ibuHigh: "120"
    });
    this.showRestrictedBeers(restrictions);
  };

  render() {
    let keyWords = Object.keys(this.props.beerStyles);
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="beer_selector col-md-4">
              <SelectionApproach
                showAll={this.state.showAll}
                unionIsAnd={this.state.unionIsAnd}
                clickSelectionButton={this.clickSelectionButton}
              />
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
                <RangeSelector
                  title="ABV"
                  lowLimit={0}
                  lowName={this.state.abvLow}
                  highLimit={12}
                  highName={this.state.abvHigh}
                  increments={24}
                  lowValue={this.state.abvLow}
                  highValue={this.state.abvHigh}
                  onChangeLow={this.abvLowChange}
                  onChangeHigh={this.abvHighChange}
                  selectionConfirmClick={this.abvCheckClicked}
                />
              </div>
              <div className="row">
                <RangeSelector
                  title="IBU"
                  lowLimit={0}
                  lowName={this.state.ibuLow}
                  highLimit={120}
                  highName={this.state.ibuHigh}
                  increments={24}
                  lowValue={this.state.ibuLow}
                  highValue={this.state.ibuHigh}
                  onChangeLow={this.ibuLowChange}
                  onChangeHigh={this.ibuHighChange}
                  selectionConfirmClick={this.ibuCheckClicked}
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
              {/* <BeersList beers={this.props.beers} /> */}
            </div>
            <div className="selection_results col-md-4">
              <h2>Filtered Beers {`(${this.state.selectedBeers.length})`}</h2>
              <BeersList beers={this.state.selectedBeers} />
            </div>
            <div className="tap_selection col-md-4">
              <h2>Bar Menu</h2>
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
