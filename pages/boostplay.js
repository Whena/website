import React from 'react';

import Layout from '../components/Layout';
import BannerBoostPlay from '../components/BannerBoostPlay/BannerBoostPlay.component';
import BoostPlayFAQs from '../components/BoostPlayFAQs/BoostPlayFAQs.component';

export default function Index() {
  return (
    <Layout>
      <BannerBoostPlay />
      <BoostPlayFAQs />
    </Layout>
  );
}
