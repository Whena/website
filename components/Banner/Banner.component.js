import React from 'react';
import {
  Grid,
  Typography,
  Button,
  useMediaQuery
} from '@material-ui/core';
import { Constants } from '../../Constants';

import styles from './Banner.styles';

export default function Banner() {
  const classes = styles();
  const matches = useMediaQuery('(min-width:960px)');
  const windowSize = matches ? "flex-end" : "center";
  const { HOME_BANNER } = Constants;

  return (
    <Grid container justify={windowSize} className={classes.bannerContainer}>
      <Grid item xs={9} md={6} lg={6}>
        <Grid container className={classes.homeJumbotron} direction="column" justify="center">
          <Grid item>
            <Typography className={classes.headerJumbotron} variant="h3" component="h1" gutterBottom>
              <span>{HOME_BANNER.HEADER}</span>
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.description} variant="h5" component="h1" gutterBottom>
              <span>{HOME_BANNER.DESCRIPTION}</span>
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
  );
}
