import React, { useContext, useState, useCallback, useEffect } from 'react';
import Head from 'next/head';
import debounce from 'lodash/debounce';
import Navbar from './Navbar/Navbar.component';
import Footer from './Footer/Footer.component';
import { LayoutContext } from '../utils/context';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

let prevScrollpos;

const useStyles = makeStyles((theme) => ({
  hidden: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      '&$navBar': {
        top: '-90px'
      }
    }
  },
  navBar: {
    top: 0,
    transition: 'all .2s ease-out'
  },
  content: {
    paddingTop: 80
  }
}));

const Layout = ({ title, children }) => {
  const classes = useStyles();
  const appLayout = useContext(LayoutContext);
  const appTitle = title || appLayout.title;

  const [hiddenNavbar, setHiddenNavbar] = useState(false);

  const handleScroll = useCallback(
    debounce(() => {
      const currentScrollPos = window.pageYOffset;
      const hide = prevScrollpos < currentScrollPos && currentScrollPos > 160;

      setHiddenNavbar(hide);

      prevScrollpos = currentScrollPos;
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    prevScrollpos = window.pageYOffset;

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <Head>
        <title>MyBoost{appTitle ? ` | ${appTitle}` : null}</title>
      </Head>
      <Navbar
        className={clsx(classes.navBar, { [classes.hidden]: hiddenNavbar })}
      />
      <div className={classes.content}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
