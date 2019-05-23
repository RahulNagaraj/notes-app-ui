import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }));
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        {counter}
        <br />
        <button type="button" onClick={this.increment}>
          INCREMENT
        </button>
        &nbsp;
        <button type="button" onClick={this.decrement}>
          DECREMENT
        </button>
      </div>
    );
  }
}
