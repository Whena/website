import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner/Banner.component';
import BoostPlayFAQs from '../components/BoostPlayFAQs/BoostPlayFAQs.component';
import Benefits from '../components/Benefits/Benefits.component';
import HowToActivate from '../components/HowToActivate/HowToActivate.component';
import { Constants } from '../constants';
import {
  Grid,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function Index() {
  const { 
    BOOSTPLAY_FOR_YOU,
    BOOSTPLAY_BANNER,
    BANNER_BUTTONS
  } = Constants;
  const classes = useStyles();

  return (
    <Layout>
      <Banner
        contentPosition="flex-start"
        header={BOOSTPLAY_BANNER.HEADER}
        description={BOOSTPLAY_BANNER.DESCRIPTION}
        backgroundImage="/static/assets/boostplay/banner/header-boostplay@3x.png"
      >
        <Grid container justify="flex-start">
          <Grid item xs={12} md={3} lg={6}>
            <Button disableRipple className={classes.buttonConfiguration}>
              <img className={classes.imageDownloadButton} src={BANNER_BUTTONS.GOOGLE_PLAY} alt={BOOSTPLAY_BANNER.LEFT_BUTTON} />
            </Button>
          </Grid>
          <Grid item xs={12} md={3} lg={6}>
            <Button disableRipple className={classes.buttonConfiguration}>
              <img className={classes.imageDownloadButton} src={BANNER_BUTTONS.APP_STORE} alt={BOOSTPLAY_BANNER.RIGHT_BUTTON} />
            </Button>
          </Grid>
        </Grid>
      </Banner>
      <Benefits
        heading={BOOSTPLAY_FOR_YOU[0]}
        menus={[...BOOSTPLAY_FOR_YOU[1]]}
      />
      <HowToActivate />
      <BoostPlayFAQs />
    </Layout>
  );
}

const useStyles = makeStyles(theme => ({
  buttonConfiguration: {
    // width: '80%'
    "&:hover": {
      backgroundColor: 'transparent'
    }
  },
  imageDownloadButton: {
    width: '80%',
    height: '90%',
    margin: '5px auto',
    [theme.breakpoints.down('md')]: {
      width: 150,
      height: 45,
    },
    [theme.breakpoints.down('sm')]: {
      width: 125,
      height: 40,
    },
  }
}));
