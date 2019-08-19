import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import styles from './Navbar.styles';

export default function Navbar() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Hidden implementation="css" only={['xs', 'sm']}>
        <DesktopNavbar />
      </Hidden>
      <Hidden implementation="css" mdUp>
        <MobileNavbar />
      </Hidden>
    </div>
  );
}
