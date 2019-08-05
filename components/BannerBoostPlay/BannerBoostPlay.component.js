import React from 'react';
import {
  Grid,
  Typography,
  // Button,
  useMediaQuery
} from '@material-ui/core';
import { Constants } from '../../constants';
import styles from './BannerBoostPlay.styles';

export default function BannerBoostPlay() {
  const classes = styles();
  const matches = useMediaQuery('(min-width:960px)');
  const windowSize = matches ? "flex-start" : "center";
  const { BOOSTPLAY_BANNER } = Constants;

  return (
    <Grid container justify={windowSize} className={classes.bannerContainer} alignContent="center">
      <Grid item className={classes.bannerMenu} xs={5}>
        <Typography className={classes.headContainer} variant="h4" component="h4">
          <span className={classes.head}>{BOOSTPLAY_BANNER.HEADER}</span>
        </Typography>
        <Typography>
          <span className={classes.description}>{BOOSTPLAY_BANNER.DESCRIPTION}</span>
        </Typography>
        <Grid container className={classes.downloadButtonContainer} justify="flex-start" spacing={3}>
          <Grid item xs={3} sm={5} md={5}>
            <img className={classes.imageDownloadButton} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Get_it_on_Google_play.svg/1280px-Get_it_on_Google_play.svg.png" alt={BOOSTPLAY_BANNER.LEFT_BUTTON} />
          </Grid>
          <Grid item xs={3} sm={5} md={5}>
            <img className={classes.imageDownloadButton} src="https://static.ring.com/assets/static/get_the_app/ios-app-badge-fd60a24e3e78e27dcb40a055bcc4240d.png" alt={BOOSTPLAY_BANNER.RIGHT_BUTTON} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
