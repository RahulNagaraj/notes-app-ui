import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const Root = ({ store }) => (
  <div>
    <Provider store={store}>
      <BrowserRouter>Hello</BrowserRouter>
    </Provider>
  </div>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default Root;
