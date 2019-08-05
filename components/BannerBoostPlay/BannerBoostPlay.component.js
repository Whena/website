import React from 'react';
import {
  Grid,
  Typography,
  // Button,
  useMediaQuery
} from '@material-ui/core';
// import { Constants } from '../../Constants';
import styles from './BannerBoostPlay.styles';

export default function BannerBoostPlay() {
  const classes = styles();
  const matches = useMediaQuery('(min-width:960px)');
  // const mobile = useMediaQuery('(max-width:650px)');
  const windowSize = matches ? "flex-start" : "center";

  return (
    <Grid container justify={windowSize} className={classes.bannerContainer} alignContent="center">
      <Grid item className={classes.bannerMenu} xs={5}>
        <Typography className={classes.headContainer} variant="h4" component="h4">
          <span className={classes.head}>Boost Your Day with BoostPlay</span>
        </Typography>
        <Typography>
          <span className={classes.description}>With BoostPlay, enrich your fun experience and get the delightful benefit</span>
        </Typography>
        <Grid container className={classes.downloadButtonContainer} justify="flex-start" spacing={3}>
          <Grid item xs={3} sm={5} md={5}>
            <img className={classes.imageDownloadButton} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Get_it_on_Google_play.svg/1280px-Get_it_on_Google_play.svg.png" alt="google play" />
          </Grid>
          <Grid item xs={3} sm={5} md={5}>
            <img className={classes.imageDownloadButton} src="https://static.ring.com/assets/static/get_the_app/ios-app-badge-fd60a24e3e78e27dcb40a055bcc4240d.png" alt="app store" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
