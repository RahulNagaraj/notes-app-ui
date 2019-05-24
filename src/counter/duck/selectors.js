import * as State from '../../store/state';
import { NAMESPACE } from './types';

export const getCounterState = state => State.getState(state, NAMESPACE);

export const getCounterValue = state => getCounterState(state).counterValue;
