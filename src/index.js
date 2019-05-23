import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Counter from './counter';

const appRoot = document.getElementById('root');

const App = () =>
  render(
    <div>
      <BrowserRouter>
        <Counter />
      </BrowserRouter>
    </div>,
    appRoot
  );

if (module.hot) {
  module.hot.accept(() => {
    App();
  });
}

App();
