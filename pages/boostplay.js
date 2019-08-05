import React from 'react';
import Layout from '../components/Layout';
import BannerBoostPlay from '../components/BannerBoostPlay/BannerBoostPlay.component';
import BoostPlayFAQs from '../components/BoostPlayFAQs/BoostPlayFAQs.component';
import Benefits from '../components/Benefits/Benefits.component';
import { Constants } from '../constants';

export default function Index() {
  const { BOOSTPLAY_FOR_YOU } = Constants;

  return (
    <Layout>
      <BannerBoostPlay />
      <BoostPlayFAQs />
      <Benefits
        menus={[...BOOSTPLAY_FOR_YOU]}
      />
    </Layout>
  );
}
