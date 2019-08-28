import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import styles from './BottomBanner.styles';

function BottomBanner({
  leftGrid = 4,
  background,
  left,
  right
}) {
  const classes = styles();

  return (
    <Grid container direction="row-reverse" justify="space-around" alignItems="center" className={classes.container} style={{backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <Grid item xs={12} sm={12 - leftGrid} className={classes.alignment}>
        {right}
      </Grid>
      <Grid item xs={12} sm={leftGrid} className={classes.alignment}>
        {left}
      </Grid>
    </Grid>
  );
}

BottomBanner.propTypes = {
  leftGrid: PropTypes.number,
  left: PropTypes.node,
  right: PropTypes.node,
  background: PropTypes.string
};

export default BottomBanner;
