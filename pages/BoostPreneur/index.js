import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner/Banner.component';
import Benefits from '../../components/Benefits/Benefits.component';
import { Constants } from '../../constants';

export default function Index() {
  const {
    BEING_A_BOOSTPRENEUR,
    BOOSTPRENEUR_BANNER,
    BANNER_BUTTONS
  } = Constants;
  const classes = useStyles();

  return (
    <Layout>
      <Banner
        contentPosition="flex-start"
        header={BOOSTPRENEUR_BANNER.HEADER}
        description={BOOSTPRENEUR_BANNER.DESCRIPTION}
      >
        <Grid container className={classes.downloadButtonContainer} justify="flex-start" spacing={3}>
          <Grid item xs={3} sm={5} md={5}>
            <img className={classes.imageDownloadButton} src={BANNER_BUTTONS.GOOGLE_PLAY} alt="Google Play" />
          </Grid>
          <Grid item xs={3} sm={5} md={5}>
            <img className={classes.imageDownloadButton} src={BANNER_BUTTONS.APP_STORE} alt="App Store" />
          </Grid>
        </Grid>
      </Banner>
      <Benefits
        heading={BEING_A_BOOSTPRENEUR[0]}
        menus={[...BEING_A_BOOSTPRENEUR[1]]}
      />
    </Layout>
  );
}


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  headContainer: {
    margin: '20px auto'
  },
  bannerContainer: {
    backgroundColor: 'rgb(237, 237, 237)',
    backgroundImage: 'url(https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg)',
    backgroundSize: 'cover',
    height: 600
  },
  bannerMenu: {
    marginLeft: 100,
  },
  head: {
    marginBottom: 40,
    fontWeight: 600,
    fontSize: 50,
    [theme.breakpoints.down('md')]: {
      fontWeight: 500,
      fontSize: 45
    },
    [theme.breakpoints.down('sm')]: {
      fontWeight: 500,
      fontSize: 40
    }
  },
  description: {
    marginBottom: 40,
    fontSize: 27.5,
    [theme.breakpoints.down('md')]: {
      fontSize: 22.5
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 17.5
    }
  },
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
