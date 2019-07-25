import React, {Fragment} from 'react'
import Link from '../Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styles from './HomeJumbotron.styles'

export default function HomeJumbotron() {
  const classes = styles()

  return (
    <Grid container className={classes.homeJumbotron} direction="column" justify="center">
      <Grid item>
        <Typography className={classes.headerJumbotron} variant="h3" component="h1" gutterBottom>
          {'Main Message Boost'}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.description} variant="h5" component="h1" gutterBottom>
          {'Description'}
        </Typography>
      </Grid>
      <Grid item style={{}}>
        <Grid container justify="flex-start" spacing={5}>
          <Grid item>
            <Button variant="contained" component="span" className={classes.buttonViewMore}>
              <font size="6.5">View More</font>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" component="span" className={classes.buttonSeeVideo}>
              <img className={classes.playIcon} src="https://img.icons8.com/ios-filled/30/000000/circled-play.png" />
              <font size="6.5">See Video</font>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}