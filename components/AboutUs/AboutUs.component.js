import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Link from '../Link';
import { Constants } from '../../constants';

import styles from './AboutUs.styles';
// import styles from '../Reusable/MiniInformation.styles';
import MiniInformation from '../Reusable/MiniInformation.component';

export default function AboutUs() {
  const classes = styles();
  const { HOME_ABOUT_US } = Constants;

  const leftComponent = (classes, HOME_ABOUT_US) => (
    <div className={classes.descriptionLeft}>
      <Typography variant="h4" color="inherit" gutterBottom className={classes.title}>
        {HOME_ABOUT_US.HEADER}
      </Typography>
      <Typography variant="body1" paragraph={true} className={classes.descriptionText}>
        {HOME_ABOUT_US.DESCRIPTION}
      </Typography>
      <Link href="/about">
        <Typography variant="h5" className={classes.linkText}>
          {HOME_ABOUT_US.MORE_BUTTON}
        </Typography>
      </Link>
    </div>
  );

  const rightComponent = (classes) => (
    <Hidden smDown>
      <img
        className={classes.infoImage}
        // src="/static/assets/bg-section-2-homepage.svg"
        src="/static/assets/asset-digitaleconomy-homepage@3x.jpg"
        alt="video-homepage"
      />
    </Hidden>
  );

  return (
    <Container maxWidth="xl" className={classes.container}>
      <MiniInformation
        leftGrid={7}
        leftComponent={leftComponent}
        rightComponent={rightComponent}
        constants={HOME_ABOUT_US}
      />
    </Container>
  );
}
