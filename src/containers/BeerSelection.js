import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/beersActions";
import BeersList from "../components/BeerList";

export class BeerSelection extends Component {
  render() {
    return (
      <>
        <div className="column">
          <div className="column__headline">Bar Menu</div>
          {this.props.menu.length > 0 ? (
            <BeersList
              beers={this.props.menu}
              listLocation={"customerMenu"}
              beerCardCheckmarkClicked={this.beerCardCheckmarkClicked}
            />
          ) : (
            ""
          )}
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

BeerSelection.propTypes = {
  beers: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerSelection);
