import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner/Banner.component';
import AboutUs from '../components/AboutUs/AboutUs.component';

export default function Index() {
  return (
    <Layout>
      <AboutUs />
      <Banner />
    </Layout>
  );
}
