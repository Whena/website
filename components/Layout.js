import React, { useContext } from 'react';
import Head from 'next/head';
import Navbar from './Navbar/Navbar.component';
import Footer from './Footer/Footer.component';
import { LayoutContext } from '../utils/context';

const Layout = ({ title, children }) => {
  const appLayout = useContext(LayoutContext);
  const appTitle = title || appLayout.title;

  return (
    <>
      <Head>
        <title>MyBoost{appTitle ? ` | ${appTitle}` : null}</title>
      </Head>
      <Navbar />
      <div style={{ paddingTop: 80 }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
