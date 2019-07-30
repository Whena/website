import React from 'react';
import {
  Grid,
  Typography
} from '@material-ui/core';

import styles from './FaqContent.styles';

export default function FaqContent() {
  const classes = styles();

  const List = () => (
    <>
      <Typography variant="h4" component="h3" gutterBottom>
        <span>Top Questions</span>
      </Typography>
      <Grid container direction="column" justify="space-between">
        <Grid item className={classes.qContainer}>
          <span>Questions 1</span>
        </Grid>
        <Grid item className={classes.qContainer}>
          <span>Questions 2</span>
        </Grid>
        <Grid item className={classes.qContainer}>
          <span>Questions 3</span>
        </Grid>
      </Grid>
    </>
  );

  return (
    <Grid container justify="space-around" className={classes.container} >
      <Grid item className={classes.listContainer}>
        <Typography variant="h3" component="h3" gutterBottom>
          <span className={classes.subMenu}>BoostPlay</span>
        </Typography>
        <List />
      </Grid>
      <Grid item className={classes.listContainer}>
        <Typography variant="h3" component="h3" gutterBottom>
          <span className={classes.subMenu}>BoostPenjual</span>
        </Typography>
        <List />
      </Grid>
      <Grid item className={classes.listContainer}>
        <Typography variant="h3" component="h3" gutterBottom>
          <span className={classes.subMenu}>BoostPreneur</span>
        </Typography>
        <List />
      </Grid>
    </Grid>
  );
}
