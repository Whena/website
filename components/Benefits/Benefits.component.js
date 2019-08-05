import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Container
} from '@material-ui/core';
import PropTypes from 'prop-types';
// import { Constants } from '../../constants'

import styles from './Benefits.styles';

function Benefits({menus}) {
  const classes = styles();

  return (
    <Container maxWidth="lg">
      <Grid container justify="space-around">
        {menus.map((menu, index) => (
          <Grid item key={index} xs={3}>
            <Box component="span">
              <Typography variant="h5" className={classes.title}>
                {menu.TITLE}
              </Typography>
              <Typography className={classes.description}>
                {menu.DESCRIPTION}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

Benefits.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.string),
};

export default Benefits;
