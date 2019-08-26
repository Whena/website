import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';

import styles from './Banner.styles';
import GooglePlayButton from '../Reusable/GooglePlayButton';
import AppStoreButton from '../Reusable/AppStoreButton';

function Banner({
  contentPosition = 'left',
  header,
  description,
  backgroundImage,
  googlePlayUrl,
  appStoreUrl,
  children
}) {
  const justifyContent = contentPosition === 'left' ? 'flex-start' : 'flex-end';
  const classes = styles({
    backgroundImage,
    backgroundPosition: contentPosition,
    contentPosition: justifyContent
  });

  return (
    <div className={classes.bannerContainer}>
      <Container maxWidth="lg">
        <Grid container justify={justifyContent}>
          <Grid
            container
            item
            className={classes.homeJumbotron}
            direction="column"
            justify="center"
            sm={8}
            md={6}
            lg={5}
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
              {children}
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
  backgroundImage: PropTypes.string,
  googlePlayUrl: PropTypes.string,
  appStoreUrl: PropTypes.string,
  children: PropTypes.node
};

export default Banner;
