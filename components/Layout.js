import React from 'react';
import Navbar from './Navbar/Navbar.component';
import Footer from './Footer/Footer.component';

const Layout = (props) => (
  <>
    <Navbar />
    <div style={{paddingTop: 80}}>
      {props.children}
    </div>
    <Footer />
  </>
);

export default Layout;
