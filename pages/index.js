import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner/Banner.component';
import HomeContent from '../components/HomeContent/HomeContent.component';
import AboutUs from '../components/AboutUs/AboutUs.component';
import { Constants } from '../constants';

export default function Index() {
  const { HOME_BANNER } = Constants;

  return (
    <Layout>
      <Banner
        contentPosition="flex-end"
        header={HOME_BANNER.HEADER}
        description={HOME_BANNER.DESCRIPTION}
      />
      <HomeContent />
      <AboutUs />
    </Layout>
  );
}
