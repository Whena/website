import React, { useContext } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Hidden from '@material-ui/core/Hidden';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import useStyles from './Navbar.styles';
import PropTypes from 'prop-types';
import { PageLoaderContext } from '../../utils/context';

function Navbar({ lang }) {
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
        <DesktopNavbar lang={lang} />
      </Hidden>
      <Hidden implementation="css" mdUp>
        <MobileNavbar />
      </Hidden>
    </div>
  );
}

Navbar.propTypes = {
  lang: PropTypes.string
}

export default Navbar;
