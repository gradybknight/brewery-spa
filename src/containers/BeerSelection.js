import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/beersActions";
import BeersList from "../components/BeerList";

export class BeerSelection extends Component {
  render() {
    return <BeersList beers={this.props.beers} />;
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerSelection);
