import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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
      <Grid container alignItems="center" justify="center">
        <Grid item sm={12} md={leftGrid}>
          { leftComponent(classes, constants) }
        </Grid>
        <Grid item sm={12} md={12-leftGrid}>
          { rightComponent(classes, constants) }
        </Grid>
      </Grid>
    </Container>
  );
}
