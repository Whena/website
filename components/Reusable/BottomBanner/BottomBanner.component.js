import React from 'react';
// import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';

import styles from './BottomBanner.styles';

function BottomBanner({
  leftGrid,
  containerHeight,
  layoutColor,
  background,
  ...props
}) {
  const classes = styles();

  return (
    <Grid container direction="row-reverse" justify="space-around" alignItems="center" className={classes.container} style={{backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <Grid item xs={12} sm={12 - leftGrid} className={classes.alignment}>
        {props.right}
      </Grid>
      <Grid item xs={12} sm={leftGrid} className={classes.alignment}>
        {props.left}
      </Grid>
    </Grid>
  );
}

export default BottomBanner;
