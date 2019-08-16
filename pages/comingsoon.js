import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/styles/makeStyles';

import Link from '../components/Link';
import ComingSoonImage from '../static/assets/coming-soon/asset-personaboostplay-comingsoonpage@3x.png';//'/static/assets/coming-soon/asset-personaboostplay-comingsoonpage@3x.jpg';
import Layout from '../components/Layout';
import { Constants } from '../constants';
const { COMING_SOON } = Constants;

function ComingSoon() {
  const classes = useStyles();

  return (
    <Layout>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container>
          <Grid item lg={4} className={classes.leftComponent}>
            <img src={ComingSoonImage} alt="Coming Soon" width="143px" />
          </Grid>
          <Grid item lg={7} className={classes.rightComponent}>
            <Typography variant="h3" className={classes.title}>
              {COMING_SOON.TITLE}
            </Typography>
            <Typography variant="h6" className={classes.description}>
              {COMING_SOON.DESCRIPTION}
            </Typography>
            <Link href="/" className={classes.linkButton}>
              <Button variant="outlined" className={classes.button}>
                <Typography className={classes.buttonText}>{COMING_SOON.BUTTON}</Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
        {/* // <img src="https://4wheelbuy.com/wp-content/uploads/2019/03/comingsoon.png" alt="coming soon" width="50%" /> */}
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
  },
  leftComponent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightComponent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    width: '669px',
    height: '56px',
    fontFamily: 'Raleway',
    fontSize: '48px',
    fontWeight: 800,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#181818',
    marginBottom: 25
  },
  description: {
    width: "651px",
    height: "150px",
    fontFamily: "Raleway",
    fontSize: "24px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "2.08",
    letterSpacing: "normal",
    color: "#565656",
    marginBottom: 25
  },
  button: {
    width: "253px",
    height: "62px",
    borderRadius: "4px",
    border: "solid 1px #ee3124"
  },
  buttonText: {
    width: "215px",
    height: "29px",
    fontFamily: "Raleway",
    fontSize: "20px",
    fontHeight: 600,
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#ee3124"
  },
  linkButton: {
    width: 253,
    "&:hover": {
      textDecoration: 'none'
    }
  }
}));

export default ComingSoon;