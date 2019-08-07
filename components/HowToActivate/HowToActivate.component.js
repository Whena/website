import React from 'react';
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import styles from './HowToActivate.styles';

function HowToActivate() {
  const classes = styles();

  return (
    <Container maxWidth="lg">
      <Typography variant="h4">
        How to activate BoostCash
      </Typography>
      <Grid container justify="space-around" className={classes.container}>
        <Grid item lg={6} className={classes.leftLayout}>
          <img className={classes.phoneDisplay} src="/static/assets/boostplay/phone_display/asset-screenboostplay-homepage@3x.png" alt="How to activate" />
          <img className={classes.phoneFrame} src="/static/assets/boostplay/how_to_activate/phone_frame/asset-mockup-homepage@3x.png" alt="Phone display" />
        </Grid>
        <Grid item lg={6}>
          <div>1231</div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HowToActivate;
