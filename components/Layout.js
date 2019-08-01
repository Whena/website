import React from 'react';
import Navbar from './Navbar/Navbar.component';
import Footer from './Footer/Footer.component';
import { CssBaseline } from '@material-ui/core';

const Layout = props => (
  <>
    <CssBaseline />
    <Navbar />
    { props.children }
    <Footer />
  </>
);

export default Layout;