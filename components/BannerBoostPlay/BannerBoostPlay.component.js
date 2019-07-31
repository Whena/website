import React from 'react';
import {
  Grid,
  Typography,
  Button,
  useMediaQuery
} from '@material-ui/core';

import styles from './BannerBoostPlay.styles';

export default function BannerBoostPlay() {
  const classes = styles();
  const matches = useMediaQuery('(min-width:960px)');
  const mobile = useMediaQuery('(max-width:650px)');
  const windowSize = matches ? "flex-start" : "center";

  const DownloadNow = () => (
    <div className={classes.buttonText}>
      Download Now
    </div>
  );

  const DownloadAplikasiBoostPlay = () => (
    <div className={classes.buttonText}>
      Download Aplikasi BoostPlay
    </div>
  );
  
  return (
    <Grid container justify={windowSize} className={classes.bannerContainer} alignContent="center">
      <Grid item className={classes.bannerMenu}>
        <Typography variant="h3" className={classes.head} component="h3" gutterBottom>
          {'BoostPlay'}
        </Typography>
        <Typography variant="h5" className={classes.description} component="h5" gutterBottom>
          {'Pengalaman gamifikasi yang luar biasa'}
        </Typography>
        <Button variant="contained" className={classes.downloadNowButton} component="span">
          {
            mobile ? <DownloadNow /> : <DownloadAplikasiBoostPlay />
          }
        </Button>
      </Grid>
    </Grid>
  );
}
