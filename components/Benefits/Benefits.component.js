import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Container
} from '@material-ui/core';
import PropTypes from 'prop-types';
import BottomLiner from '../BottomLiner/BottomLiner.component';

import styles from './Benefits.styles';

function Benefits({
  heading,
  menus
}) {
  const classes = styles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h4" className={classes.heading}>
        <span>{heading}</span>
        <Box component="span">
          <BottomLiner />
        </Box>
      </Typography>
      <Grid container justify="space-around">
        {menus.map((menu, index) => (
          <Grid item key={index} xs={12} md={3}>
            <Grid container justify="center" alignItems="center" className={classes.iconContainer}>
              <Grid item>
                <img className={classes.icon} src={menu.ICON} alt={menu.TITLE} />
              </Grid>
            </Grid>
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
  heading: PropTypes.string,
  menus: PropTypes.arrayOf(PropTypes.object)
};

export default Benefits;
