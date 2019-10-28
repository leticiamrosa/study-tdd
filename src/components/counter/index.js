import React, { Component } from 'react';
import { Container, DisplayCounter, Button, ContentButton } from './styles';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      showErrorMessage: false,
      displayMessage: 'The counter is currently',
      error: false
    };
  }

  handleIncrement() {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));

    this.verifyCounter();
  }

  handleDecrement() {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));

    this.verifyCounter();
  }

  verifyCounter() {
    const { counter } = this.state;
    if (counter < 0) {
      this.setState({
        displayMessage: 'The counter cant go below zero',
        error: true
      });
    } else {
      this.setState({
        displayMessage: 'The counter is currently',
        error: false
      });
    }
  }

  renderDisplay() {
    const { displayMessage, counter, error } = this.state;

    return (
      <DisplayCounter data-test="counter-display">
        {displayMessage} <span>{!error && counter}</span>
      </DisplayCounter>
    );
  }

  renderButtons() {
    return (
      <ContentButton>
        <Button
          data-test="increment-button"
          increment
          onClick={() => this.handleIncrement()}
        >
          <span>+</span>
        </Button>
        <Button
          data-test="decrement-button"
          decrement
          onClick={() => this.handleDecrement()}
        >
          <span>-</span>
        </Button>
      </ContentButton>
    );
  }

  render() {
    return (
      <Container data-test="component-counter">
        {this.renderDisplay()}
        {this.renderButtons()}
      </Container>
    );
  }
}
