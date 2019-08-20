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
    // <Grid container direction="column" justify="center" className={classes.container} style={{backgroundColor: props.background, height: containerHeight}}>
    <Grid container justify="space-around" alignItems="center" className={classes.container} style={{backgroundImage: `url(${background})`, height: containerHeight, backgroundSize: 'cover' }}>
      <Grid item xs={12} sm={leftGrid} className={classes.alignment}>
        {props.left}
      </Grid>
      <Grid item xs={12} sm={12 - leftGrid} className={classes.alignment}>
        {props.right}
      </Grid>
    </Grid>
    // </Grid>
  );
}

export default BottomBanner;
