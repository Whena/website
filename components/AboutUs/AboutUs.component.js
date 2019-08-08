import React from 'react';
import {
  Typography,
  Hidden
} from '@material-ui/core';
import Link from 'next/link';
import { Constants } from '../../constants';

// import styles from './AboutUs.styles';
// import styles from '../Reusable/MiniInformation.styles';
import MiniInformation from '../Reusable/MiniInformation.component';

export default function AboutUs() {
  // const classes = styles();
  const { HOME_ABOUT_US } = Constants;

  const leftComponent = (classes, HOME_ABOUT_US) => (
    <div className={classes.descriptionLeft}>
      <Typography variant="h4" color="inherit" gutterBottom>
        {HOME_ABOUT_US.HEADER}
      </Typography>
      <Typography variant="body1" paragraph={true}>
        {HOME_ABOUT_US.DESCRIPTION}
      </Typography>
      <Typography variant="h5">
        <Link href="#">
          {HOME_ABOUT_US.MORE_BUTTON}
        </Link>
      </Typography>
    </div>
  );

  const rightComponent = (classes) => (
    <Hidden smDown>
      <img
        className={classes.infoImage}
        src="/static/assets/bg-section-2-homepage.svg"
        alt="video-homepage"
      />
    </Hidden>
  );

  return (
    <MiniInformation
      leftGrid={8}
      leftComponent={leftComponent}
      rightComponent={rightComponent}
      constants={HOME_ABOUT_US}
    />
  );
}
