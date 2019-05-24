import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { actions as counterActions, selectors as counterSelectors } from './duck';

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
          <FontAwesomeIcon icon="plus" />
          <span style={{ margin: '0 5px' }}>INCREMENT</span>
        </button>
        &nbsp;
        <button type="button" onClick={this.decrement}>
          <FontAwesomeIcon icon="minus" />
          <span style={{ margin: '0 5px' }}>DECREMENT</span>
        </button>
      </div>
    );
  }
}

Counter.propTypes = {
  counterValue: PropTypes.number.isRequired,
  incrementAction: PropTypes.func.isRequired,
  decrementAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  counterValue: counterSelectors.getCounterValue(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    incrementAction: counterActions.increment,
    decrementAction: counterActions.decrement,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
