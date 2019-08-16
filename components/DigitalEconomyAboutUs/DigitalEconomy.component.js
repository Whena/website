import React from 'react';
import {
  Typography
} from '@material-ui/core';

import MiniInformation from '../Reusable/MiniInformation.component';

export default function DigitalEconomy() {

  const leftComponent = (classes) => (
    <img
      className={classes.infoImage}
      src="/static/assets/asset-section-2-aboutus@3x.jpg"
      alt="digital-economy"
    />
  );

  const rightComponent = (classes) => (
    <div className={classes.description}>
      <Typography variant="h4" color="inherit" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
    </div>
  );

  return (
    <MiniInformation
      leftGrid={4}
      leftComponent={leftComponent}
      rightComponent={rightComponent}
    />
  );
}