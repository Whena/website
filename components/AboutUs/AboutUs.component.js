import React from 'react';
import { 
  Grid, 
  Typography 
} from '@material-ui/core';
import Link from 'next/link';

import styles from './AboutUs.styles';

export default function AboutUs() {
  const classes = styles();

  return (
    <Grid container spacing={5} className={classes.container} justify="space-around">
      <Grid item xs={12} lg={6}>
        <Grid container justify="center">
          <Grid item className={classes.contentWording}>
            <Typography className={classes.heading} variant="h3" color="inherit">
              About Us
            </Typography>
            <Typography className={classes.description} variant="h6" color="inherit">
              Boost is a digital economy platform which provides digital interaction between merchant and consumers (B2C) over a QR Code as a medium to initiate - process - record are interaction through a mobile application at both merchant and consumer end.
            </Typography>
            <Typography className={classes.seeDetailHereContainer} variant="h6" color="inherit">
              <Link href="#">
                <p className={classes.seeDetailHere}>See detail here -></p>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Grid container justify="center">
          <Grid item>
            <div className={classes.imageContainer}>
              <img className={classes.contentImage} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/No_image_available_600_x_450.svg/1200px-No_image_available_600_x_450.svg.png" alt="about us" />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
