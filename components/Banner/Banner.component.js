import React from 'react';
import {
  Grid,
  Typography,
  useMediaQuery,
  Container
} from '@material-ui/core';
import PropTypes from 'prop-types';

import styles from './Banner.styles';

function Banner({
  contentPosition,
  header,
  description,
  backgroundImage,
  ...props
}) {
  const classes = styles();
  const matches = useMediaQuery('(min-width:960px)');
  const windowSize = matches ? contentPosition : "center";

  return (
    <div className={classes.bannerContainer} style={{backgroundImage: `url(${backgroundImage})`}}>
      <Container maxWidth="lg">
        <Grid container justify={windowSize}>
          <Grid item xs={10} lg={5}>
            <Grid container className={classes.homeJumbotron} direction="column" justify="center">
              <Grid item>
                <Typography className={classes.headerJumbotron} variant="h3" component="h1" color="secondary" gutterBottom>
                  <span>{header}</span>
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.description} variant="h5" color="secondary" gutterBottom>
                  <span>{description}</span>
                </Typography>
              </Grid>
              <Grid item>
                {props.children}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Banner.propTypes = {
  contentPosition: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
  backgroundImage: PropTypes.string
};

export default Banner;
