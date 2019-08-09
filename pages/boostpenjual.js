import React from 'react';
import Layout from '../components/Layout';
import { Constants } from '../constants';
import Banner from '../components/Banner/Banner.component';
import Benefits from '../components/Benefits/Benefits.component';
import BottomBanner from '../components/Reusable/BottomBanner/BottomBanner.component';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

export default function Boostpenjual() {
  const classes = useStyles();
  const { BOOST_PENJUAL_BANNER, BOOST_PENJUAL_BENEFITS } = Constants;

  const LeftButton = () => (
    <Button variant="contained" component="span" className={classes.contactUsButton}>
      <span className={classes.buttonText}>Join Now</span>
    </Button>
  );

  const RightInfo = () => (
    <Typography className={classes.wordingContainer} variant="h3" component="h1" gutterBottom>
      <p className={classes.wording}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </Typography>
  );

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
      <BottomBanner
        leftGrid={4}
        left={<LeftButton />}
        right={<RightInfo />}
        containerHeight={200}
        layoutColor="red"
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
  },
  wordingContainer: {
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
    padding: theme.spacing(3)
  },
  wording: {
    color: '#fff',
    fontSize: 17,
    lineHeight: 1.5,
    [theme.breakpoints.down('md')]: {
      fontSize: '0.7em'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7em'
    },
  },
  buttonText: {
    color: 'red',
    fontSize: '2.2em',//20
    textTransform: 'none',

    [theme.breakpoints.down('md')]: {
      fontSize: '1.7em'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.7em'
    },
  },
  contactUsButton: {
    backgroundColor: '#fff',
    width: 300,
    [theme.breakpoints.down('md')]: {
      width: 230,
      height: 70
    },
    marginLeft: 20
  },
}));
