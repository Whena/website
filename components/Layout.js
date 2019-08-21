import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar/Navbar.component';
import Footer from './Footer/Footer.component';

const Layout = ({ title, ...props }) => (
  <>
    <Head>
      <title>MyBoost{title ? ` | ${title}` : null}</title>
    </Head>
    <Navbar />
    <div style={{ paddingTop: 80 }}>{props.children}</div>
    <Footer />
  </>
);

export default Layout;
