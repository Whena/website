import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';

import styles from './HomeContent.styles'

export default function HomeContent() {
  const classes = styles()

  return (
    <Grid container spacing={5} className={classes.container} justify="space-around">
      <Grid item xs={4}>
        <Grid container justify="center">
          <div className={classes.imageContainer}>
            {/* <img className={classes.contentImage} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/No_image_available_600_x_450.svg/1200px-No_image_available_600_x_450.svg.png"  /> */}
          </div>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.heading} variant="h3" color="inherit">
          Meet Boost, the Digital Economy Platform
        </Typography>
        <Typography className={classes.description} variant="h6" color="inherit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography className={classes.knowMoreHereLinkContainer} variant="h6" color="inherit">
          <Link href="#">
            <a className={classes.knowMoreHereLink}>Know More Here -></a>
          </Link>
        </Typography>
      </Grid>
    </Grid>
  )
}
