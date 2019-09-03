import React, { useContext } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Hidden from '@material-ui/core/Hidden';
import clsx from 'clsx';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import useStyles from './Navbar.styles';
import PropTypes from 'prop-types';
import { PageLoaderContext } from '../../utils/context';
import boostLogo from '../../static/assets/boost_logo/asset-logoboost@3x.png';

function Navbar({ lang, className }) {
  const classes = useStyles();
  const LoaderContext = useContext(PageLoaderContext);
  
  return (
    <div className={clsx(classes.root, className)}>
      {LoaderContext.loading && (
        <LinearProgress
          classes={{
            barColorPrimary: classes.loaderColor,
            root: classes.loaderContainer
          }}
        />
      )}
      <Hidden implementation="css" only={['xs', 'sm']}>
        <DesktopNavbar lang={lang} logo={boostLogo} />
      </Hidden>
      <Hidden implementation="css" mdUp>
        <MobileNavbar logo={boostLogo} />
      </Hidden>
    </div>
  );
}

Navbar.propTypes = {
  lang: PropTypes.string,
  className: PropTypes.string
};

export default Navbar;
