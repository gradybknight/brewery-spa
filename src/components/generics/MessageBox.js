import React from "react";
import PropTypes from "prop-types";

const MessageBox = props => {
  let { message, clickToRemove, messageid } = props;
  return (
    <div id="message__box">
      <div className="row">
        <div className="col-lg-9">
          <p>{message}</p>
        </div>
        <div
          className="col-lg-1"
          onClick={event => {
            clickToRemove(event.target.id);
          }}
        >
          <div id={messageid} messageid={messageid} className="remove__button">
            x
          </div>
        </div>
      </div>
    </div>
  );
};

MessageBox.props = {
  message: PropTypes.string.isRequired,
  clickToRemove: PropTypes.func.isRequired
};

export default MessageBox;
