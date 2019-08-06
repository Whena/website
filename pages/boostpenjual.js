import React from 'react';
import Layout from '../components/Layout';
import { Constants } from '../constants';
import Banner from '../components/Banner/Banner.component';
import Benefits from '../components/Benefits/Benefits.component';
import {
  Grid,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export default function Boostpenjual() {
  const classes = useStyles();
  const { BOOST_PENJUAL_BANNER, BOOST_PENJUAL_BENEFITS } = Constants;

  return (
    <Layout>
      <Banner
        contentPosition="flex-start"
        header={BOOST_PENJUAL_BANNER.HEADER}
        description={BOOST_PENJUAL_BANNER.DESCRIPTION}
      >
        <Grid container className={classes.downloadButtonContainer} justify="flex-start" spacing={3}>
          <Grid item xs={3} sm={5} md={5}>
            <img className={classes.imageDownloadButton} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Get_it_on_Google_play.svg/1280px-Get_it_on_Google_play.svg.png" alt={BOOST_PENJUAL_BANNER.LEFT_BUTTON} />
          </Grid>
          <Grid item xs={3} sm={5} md={5}>
            <img className={classes.imageDownloadButton} src="https://static.ring.com/assets/static/get_the_app/ios-app-badge-fd60a24e3e78e27dcb40a055bcc4240d.png" alt={BOOST_PENJUAL_BANNER.RIGHT_BUTTON} />
          </Grid>
        </Grid>
      </Banner>
      <Benefits
        heading={BOOST_PENJUAL_BENEFITS[0]}
        menus={[...BOOST_PENJUAL_BENEFITS[1]]}
      />
    </Layout>
  );
}

const useStyles = makeStyles(theme => ({
  downloadButtonContainer: {
    marginTop: 15
  },
  imageDownloadButton: {
    width: '80%',
    height: '90%',
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
