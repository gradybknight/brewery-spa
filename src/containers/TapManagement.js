import React, { Component } from "react";
import RangeSelector from "../components/generics/RangeSelector";

export default class TapManagement extends Component {
  render() {
    return (
      <div>
        <h1>Tap Management</h1>
        <RangeSelector
          title="testing"
          lowLimit={0}
          highLimit={100}
          increments={20}
          lowValue={0}
          highValue={100}
        />
      </div>
    );
  }
}
