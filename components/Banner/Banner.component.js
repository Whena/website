import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';

import styles from './Banner.styles';
import GooglePlayButton from '../Reusable/GooglePlayButton';
import AppStoreButton from '../Reusable/AppStoreButton';

function Banner({
  contentPosition,
  header,
  description,
  backgroundImage,
  googlePlayUrl,
  appStoreUrl,
  ...props
}) {
  const classes = styles({ backgroundImage, contentPosition });

  return (
    <div className={classes.bannerContainer}>
      <Container maxWidth="lg">
        <Grid
          container
          item
          className={classes.homeJumbotron}
          direction="column"
          justify="center"
          sm={8}
          md={6}
          lg={6}
        >
          <Grid item>
            <Typography
              className={classes.headerJumbotron}
              variant="h3"
              component="h1"
              color="secondary"
              gutterBottom
            >
              <span>{header}</span>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              className={classes.description}
              variant="h5"
              color="secondary"
              gutterBottom
            >
              <span>{description}</span>
            </Typography>
          </Grid>
          <Grid item className={classes.actionButton}>
            {googlePlayUrl && <GooglePlayButton url={googlePlayUrl} />}
            {appStoreUrl && <AppStoreButton url={appStoreUrl} />}
            {props.children}
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
