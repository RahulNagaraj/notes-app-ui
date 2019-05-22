import { h, Component } from 'preact';

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
          + INCREMENT
        </button>
        <button type="button" onClick={this.decrement}>
          - DECREMENT
        </button>
      </div>
    );
  }
}
