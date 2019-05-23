import * as types from './types';

const initialState = {
  counterValue: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case types.INCREMENT:
    return {
      ...state,
      counterValue: state.counterValue + 1,
    };
  case types.DECREMENT:
    return {
      ...state,
      counterValue: state.counterValue - 1,
    };
  default:
    return state;
  }
};
