import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import BottomLiner from '../BottomLiner/BottomLiner.component';

import styles from './Benefits.styles';

function Benefits({ heading, contents = [] }) {
  const classes = styles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h4" className={classes.heading}>
        <span>{heading}</span>
        <Box component="span">
          <BottomLiner />
        </Box>
      </Typography>
      <Grid container spacing={2} justify="space-around" alignItems="flex-start">
        {contents.map((content) => (
          <Grid
            item
            container
            direction="column"
            justify="center"
            key={content.title}
            xs={12}
            sm={4}
            md={4}
            lg={3}
          >
            <div className={classes.iconContainer}>
              <img src={content.image_banner} alt={content.title} />
            </div>
            <Typography display="block" variant="h5" className={classes.title}>
              {content.title}
            </Typography>
            <Typography display="block" className={classes.description}>
              {content.description}
            </Typography>
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
