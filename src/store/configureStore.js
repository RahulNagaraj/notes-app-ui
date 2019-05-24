import { createStore, compose, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const configureStoreProd = (initialState) => {
  const middlewares = [
    // Add other middleware on this line...
    sagaMiddleware,
  ];

  const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));

  sagaMiddleware.run(rootSaga);

  return store;
};

const configureStoreDev = (initialState) => {
  const middlewares = [
    // Add other middleware on this line...

    // Redux middleware that spits an error on you when you try to mutate your state
    // either inside a dispatch or between dispatches.
    reduxImmutableStateInvariant(),

    sagaMiddleware,
  ];

  // add support for Redux dev tools
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  // sagaMiddleware.run(rootSaga);
  // Hack for HMR for Redux-Parcel
  if (!window.store) {
    window.store = store;
    return window.store;
  }
  window.store.replaceReducer(rootReducer);
  return window.store;
};

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
