import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import Header from './navigation/Header';

const Root = ({ store }) => (
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header>
            <Routes />
          </Header>
        </div>
      </BrowserRouter>
    </Provider>
  </div>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default Root;
