import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import { Constants } from '../../constants';

// import styles from './HomeContent.styles';
// import styles2 from '../Reusable/MiniInformation.styles';
import MiniInformation from '../Reusable/MiniInformation.component';
import Link from '../Link';

export default function HomeContent() {
  const { HOME_CONTENT } = Constants;

  const leftComponent = (classes) => (
    <div className={classes.infoImageContainer}>
      <img
        className={classes.infoImage}
        src="/static/assets/asset-digitaleconomy-homepage@3x.jpg"
        alt="digitaleconomy"
      />
    </div>
  );

  const rightComponent = (classes, HOME_CONTENT) => (
    <div className={classes.description}>
      <Typography variant="h4" color="inherit" gutterBottom className={classes.title}>
        {HOME_CONTENT.HEADER}
      </Typography>
      <Typography variant="body1" paragraph={true} className={classes.descriptionText}>
        {HOME_CONTENT.DESCRIPTION}
      </Typography>
      <Link href="/comingsoon" className={classes.link}>
        <Typography variant="h5" className={classes.linkText}>
          {HOME_CONTENT.MORE_BUTTON}
        </Typography>
      </Link>
    </div>
  );

  return (
    <MiniInformation
      leftGrid={5}
      leftComponent={leftComponent}
      rightComponent={rightComponent}
      constants={HOME_CONTENT}
    />
  );
}
