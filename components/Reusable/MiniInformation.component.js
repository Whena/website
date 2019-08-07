import React from 'react';
import { Container, Grid } from '@material-ui/core';

import styles from './MiniInformation.styles';

export default function MiniInformation({
  leftGrid,
  leftComponent,
  rightComponent,
  constants
}) {
  const classes = styles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container alignItems="center">
        <Grid item md={leftGrid}>
          { leftComponent(classes, constants) }
        </Grid>
        <Grid item md={12-leftGrid}>
          { rightComponent(classes, constants) }
        </Grid>
      </Grid>
    </Container>
  );
}