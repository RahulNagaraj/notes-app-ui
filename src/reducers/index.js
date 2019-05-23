import { combineReducers } from 'redux';
import counterReducer, { types as counterTypes } from '../counter/duck';

const rootReducer = combineReducers({
  [counterTypes.NAMESPACE]: counterReducer,
});

export default rootReducer;
