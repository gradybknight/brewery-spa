import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/beersActions";

export class Nav extends Component {
  componentDidMount() {
    if (this.props.beers.length > 0) {
      this.props.actions.getMenu(this.props.beers);
    } else {
      let waitingForBeerList = setInterval(() => {
        if (this.props.beers.length > 0) {
          clearInterval(waitingForBeerList);
          this.props.actions.getMenu(this.props.beers);
        }
      }, 50);
    }
  }

  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Bar Menu</Link>
          </li>
          <li>
            <Link to="/beerManagement">Beer Managment</Link>
          </li>
        </ul>
      </nav>
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

Nav.propTypes = {
  user: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
