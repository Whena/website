import React from 'react';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/styles/makeStyles';

import Layout from '../components/Layout';

function ComingSoon() {
  const classes = useStyles();

  return (
    <Layout>
      <Container maxWidth="lg" className={classes.container}>
        <img src="https://4wheelbuy.com/wp-content/uploads/2019/03/comingsoon.png" alt="coming soon" width="50%" />
      </Container>
    </Layout>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export default ComingSoon;