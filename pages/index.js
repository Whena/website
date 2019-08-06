import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner/Banner.component';
import HomeContent from '../components/HomeContent/HomeContent.component';
import AboutUs from '../components/AboutUs/AboutUs.component';
import { Constants } from '../constants';
import {
  Grid,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function Index() {
  const { HOME_BANNER } = Constants;
  const classes = useStyles();

  return (
    <Layout>
      <Banner
        contentPosition="flex-end"
        header={HOME_BANNER.HEADER}
        description={HOME_BANNER.DESCRIPTION}
      >
        <Grid container justify="flex-start">
          <Grid item>
            <Grid container justify="space-between" spacing={5}>
              <Grid item xs={6} sm={6}>
                <Button variant="contained" component="span" className={classes.buttonViewMore}>
                  <span className={classes.buttonText}>{HOME_BANNER.LEFT_BUTTON}</span>
                </Button>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Button variant="contained" component="span" className={classes.buttonSeeVideo}>
                  <img className={classes.playIcon} src="https://img.icons8.com/ios-filled/30/000000/circled-play.png" alt="rendering error" />
                  <span className={classes.buttonText}>{HOME_BANNER.RIGHT_BUTTON}</span>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Banner>
      <HomeContent />
      <AboutUs />
    </Layout>
  );
}

const useStyles = makeStyles(theme => ({
  bannerContainer: {
    // backgroundColor: 'rgb(237, 237, 237)',
    backgroundImage: `url(/static/assets/bg-header-homepage.png)`,//'url(https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg)',
    backgroundSize: 'cover',
  },
  headerJumbotron: {
    marginBottom: 40,
    fontWeight: 700
  },
  description: {
    marginBottom: 40
  },
  buttonViewMore: {
    width: 250,
    height: 75,
    backgroundColor: 'red',
    color: '#fff',
    textTransform: 'none',
    [theme.breakpoints.down('lg')]: {
      marginRight: 10
    },
    [theme.breakpoints.down('md')]: {
      width: 200,
      height: 68,
    },
    [theme.breakpoints.down('xs')]: {
      width: 175,
      height: 63,
    },
  },
  buttonSeeVideo: {
    width: 250,
    height: 75,
    backgroundColor: 'transparent',
    textTransform: 'none',
    [theme.breakpoints.down('lg')]: {
      marginLeft: 10
    },
    [theme.breakpoints.down('md')]: {
      width: 200,
      height: 68,
    },
    [theme.breakpoints.down('xs')]: {
      width: 175,
      height: 63,
    },
  },
  homeJumbotron: {
    height: '600px',
  },
  playIcon: {
    marginRight: 10
  },
  buttonText: {
    fontSize: 24,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16
    },
    color: '#fff'
  },
}));

// export default useStyles;
