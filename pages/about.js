import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Layout from '../components/Layout';
import DigitalEconomyAboutUs from '../components/DigitalEconomyAboutUs/DigitalEconomy.component';
import BottomBanner from '../components/Reusable/BottomBanner/BottomBanner.component';
import makeStyles from '@material-ui/styles/makeStyles';

export default function Index() {
  const classes = useStyles();

  const LeftButton = () => (
    <div className={classes.buttonContainer}>
      <Button variant="contained" component="span" className={classes.joinNowButton}>
        <span className={classes.buttonText}>Join Now</span>
      </Button>
    </div>
  );

  const RightInfo = () => (
    <Typography className={classes.wordingContainer} variant="h6" gutterBottom>
      <p className={classes.wording}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </Typography>
  );

  const MissionComponent = () => (
    <Container maxWidth="lg" style={{ marginBottom: '3.5rem' }}>
      <Box py={4}>
        <Typography variant="h4" style={{ fontWeight: 700 }}>
          Mission
        </Typography>
      </Box>
      <Box py={5}>
        <Typography variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
    </Container>
  );
  return (
    <Layout>
      <MissionComponent />
      <DigitalEconomyAboutUs />
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
  wordingContainer: {
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3)
    },
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3)
  },
  wording: {
    color: '#fff',
    // fontSize:'0.4em',
    lineHeight: 1.5
    // [theme.breakpoints.down('md')]: {
    //   fontSize: '1.0rem'
    // },
    // [theme.breakpoints.down('xs')]: {
    //   fontSize: '0.25em'
    // }
  },
  buttonContainer: {
    textAlign: 'center'
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
    }
  },
  joinNowButton: {
    backgroundColor: '#fff',
    width: 250,
    [theme.breakpoints.down('md')]: {
      width: 230,
      height: 70
    },
    [theme.breakpoints.down('sm')]: {
      width: 200,
      height: 50
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
      width: 180,
      height: 50
    },
    marginLeft: 20
  }
}));
