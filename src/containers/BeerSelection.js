import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/beersActions";

export class BeerSelection extends Component {
  render() {
    return (
      <>
        <h1>Bar Menu</h1>
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
