import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div data-test="component-counter">
        <h1>App</h1>
      </div>
    );
  }
}
