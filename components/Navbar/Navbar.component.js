import React, { useContext } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Hidden from '@material-ui/core/Hidden';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import useStyles from './Navbar.styles';
import { PageLoaderContext } from '../../utils/context';

export default function Navbar() {
  const classes = useStyles();
  const LoaderContext = useContext(PageLoaderContext);

  return (
    <div className={classes.root}>
      {LoaderContext.loading && (
        <LinearProgress
          classes={{
            barColorPrimary: classes.loaderColor,
            root: classes.loaderContainer
          }}
        />
      )}
      <Hidden implementation="css" only={['xs', 'sm']}>
        <DesktopNavbar />
      </Hidden>
      <Hidden implementation="css" mdUp>
        <MobileNavbar />
      </Hidden>
    </div>
  );
}
