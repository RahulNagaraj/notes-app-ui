import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

const Unauthorized = () => (
  <Fragment>
    <Typography variant="h3" component="h2" gutterBottom>
      Please Login to View the app
    </Typography>
  </Fragment>
);

export default Unauthorized;
