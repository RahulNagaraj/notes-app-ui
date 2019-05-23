import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as counterActions } from './duck';

class Counter extends Component {
  increment = () => {
    const { incrementAction } = this.props;
    incrementAction();
  };

  decrement = () => {
    const { decrementAction } = this.props;
    decrementAction();
  };

  render() {
    const { counterValue } = this.props;
    return (
      <div>
        {counterValue}
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

const mapStateToProps = state => ({
  counterValue: state.counter.counterValue,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      incrementAction: counterActions.increment,
      decrementAction: counterActions.decrement,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
