import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import { Constants } from '../../constants';

// import styles from './HomeContent.styles';
// import styles2 from '../Reusable/MiniInformation.styles';
import MiniInformation from '../Reusable/MiniInformation.component';

export default function HomeContent() {
  const { HOME_CONTENT } = Constants;

  const leftComponent = (classes) => (
    <img
      className={classes.infoImage}
      src="/static/assets/asset-digitaleconomy-homepage@3x.jpg"
      alt="digitaleconomy"
    />
  );

  const rightComponent = (classes, HOME_CONTENT) => (
    <div className={classes.description}>
      <Typography variant="h4" color="inherit" gutterBottom>
        {HOME_CONTENT.HEADER}
      </Typography>
      <Typography variant="body1" paragraph={true}>
        {HOME_CONTENT.DESCRIPTION}
      </Typography>
      <Typography variant="h5">
        {HOME_CONTENT.MORE_BUTTON}
      </Typography>
    </div>
  );

  return (
    <MiniInformation
      leftGrid={4}
      leftComponent={leftComponent}
      rightComponent={rightComponent}
      constants={HOME_CONTENT}
    />
  );
}
