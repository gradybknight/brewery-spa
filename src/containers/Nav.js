import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/beersActions";

export class Nav extends Component {
  componentDidMount() {
    // this.props.actions.getAllBeers();
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Beer Selection</Link>
          </li>
          <li>
            <Link to="/beerManagement">Beer Managment</Link>
          </li>
          <li>
            <Link to="/tapManagement">Tap Managment</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.beers
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

Nav.propTypes = {
  user: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
