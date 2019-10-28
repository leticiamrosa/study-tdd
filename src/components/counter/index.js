import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div data-test="component-counter">
        <h1 data-test="counter-display">The counter is currently</h1>
        <button data-test="increment-button">Increment Counter</button>
      </div>
    );
  }
}
