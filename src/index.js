import React from 'react';
import { render } from 'react-dom';
import Root from './root';
import configureStore from './store/configureStore';

const appRoot = document.getElementById('root');
const store = configureStore();

const RootApp = () => render(<Root store={store} />, appRoot);

if (module.hot) {
  module.hot.accept(RootApp);
}

RootApp();
