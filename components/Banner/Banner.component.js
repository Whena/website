import React from 'react';
import {
  Grid,
  Typography,
  Button,
  useMediaQuery,
  Container
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Constants } from '../../constants';
// import ImageBanner from '../../static/assets/boost.jpg';

import styles from './Banner.styles';

function Banner({
  contentPosition,
  header,
  description
}) {
  const classes = styles();
  const matches = useMediaQuery('(min-width:960px)');
  const windowSize = matches ? contentPosition : "center";
  const { HOME_BANNER } = Constants;

  return (
    <div className={classes.bannerContainer}>
      <Container maxWidth="lg">
        <Grid container justify={windowSize}>
          <Grid item xs={10} lg={6}>
            <Grid container className={classes.homeJumbotron} direction="column" justify="center">
              <Grid item>
                <Typography className={classes.headerJumbotron} variant="h3" component="h1" gutterBottom>
                  <span>{header}</span>
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.description} variant="h5" component="h1" gutterBottom>
                  <span>{description}</span>
                  {/* <img src={ImageBanner} alt="123" /> */}
                </Typography>
              </Grid>
              <Grid item>
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Banner.propTypes = {
  contentPosition: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string
};

export default Banner;
