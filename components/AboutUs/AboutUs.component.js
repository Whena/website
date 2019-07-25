import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

import styles from './AboutUs.styles'

export default function AboutUs() {
  const classes = styles()

  return (
    <Grid container spacing={5} className={classes.container} justify="space-around">
      <Grid item xs={6}>
        <Grid container justify="center">
          <Grid item className={classes.contentWording}>
          <Typography className={classes.heading} variant="h3" color="inherit">
            About Us
          </Typography>
          <Typography className={classes.description} variant="h6" color="inherit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Typography className={classes.seeDetailHereContainer} variant="h6" color="inherit">
            <Link href="#">
              <a className={classes.seeDetailHere}>See detail here -></a>
            </Link>
          </Typography>
          </Grid>
        </Grid>
        {/* </div> */}
      </Grid>
      <Grid item xs={6} >
        <div className={classes.imageContainer}>
          {/* <img className={classes.contentImage} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/No_image_available_600_x_450.svg/1200px-No_image_available_600_x_450.svg.png"  /> */}
        </div>
      </Grid>
    </Grid>
  )
}
