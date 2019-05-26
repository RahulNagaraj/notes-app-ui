import React, { Fragment } from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  headerTitle: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const Home = () => {
  const styles = useStyles();
  return (
    <Fragment>
      <Container>
        <Typography className={styles.headerTitle} variant="h4" component="h2" gutterBottom>
          Welcome to Notes!
        </Typography>
      </Container>
    </Fragment>
  );
};

export default Home;
