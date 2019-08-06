import React from 'react';
import Layout from '../components/Layout';
import { Constants } from '../constants';
import Banner from '../components/Banner/Banner.component';
import Benefits from '../components/Benefits/Benefits.component';
import {
  Grid,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function Influencer() {
  const { KOL_BANNER, KOL_BENEFITS } = Constants;
  const classes = useStyles();

  return (
    <Layout>
      <Banner
        contentPosition="flex-start"
        header={KOL_BANNER.HEADER}
        description={KOL_BANNER.DESCRIPTION}
      >
        <Button variant="outlined" component="span" className={classes.signUpButton}>
          <span className={classes.buttonText}>{KOL_BANNER.BUTTON}</span>
        </Button>
      </Banner>
      <Benefits
        heading={KOL_BENEFITS[0]}
        menus={[...KOL_BENEFITS[1]]}
      />
    </Layout>
  );
}

const useStyles = makeStyles(theme => ({
  signUpButton: {
    width: '60%',
    height: '80%',
    border: '2px solid #fff'
  },
  buttonText: {
    marginTop: 5,
    height: 60,
    color: '#fff',
    fontSize: '30px',
    textTransform: 'none',
  }
}));
