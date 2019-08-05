import React from 'react';
import {
  Grid,
  Typography,
  Link
} from '@material-ui/core';

import styles from './BeOurPartner.styles';

export default function BeOurPartner() {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Grid
        container
        justify="space-around"
        alignItems="center"
        className={classes.gridContainer}
        spacing={1}
      >
        <Grid item xs={5}>
          <Typography variant="h4" style={{textAlign: 'center'}}>
            <span className={classes.beOurPartner}>Be Our Partner</span>
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography variant="h6">
            <span className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              {/* text decoration gabisa diambil dari 
              class jadi dibikin inline dulu */}
              <Link href="/" style={{textDecoration: 'none'}}>
                <span className={classes.joinNow}>Join Now</span>
              </Link>
            </span>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
