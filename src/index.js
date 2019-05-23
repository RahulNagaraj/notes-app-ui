import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Counter from './counter/counter';

const appRoot = document.getElementById('root');
const store = configureStore();

const App = () =>
  render(
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Counter />
        </BrowserRouter>
      </Provider>
    </div>,
    appRoot
  );

App();
