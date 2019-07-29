import React from 'react';
import Navbar from './Navbar/Navbar.component';
import Footer from './Footer/Footer.component';

const Layout = props => (
  <>
    <Navbar />
    { props.children }
    <Footer />
  </>
);

export default Layout;