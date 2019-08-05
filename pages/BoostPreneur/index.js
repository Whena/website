import React from 'react';
import Layout from '../../components/Layout';
import BannerBoostPlay from '../../components/BannerBoostPlay/BannerBoostPlay.component';
import Benefits from '../../components/Benefits/Benefits.component';
import { Constants } from '../../constants';

export default function Index() {
  const { BEING_A_BOOSTPRENEUR } = Constants;

  return (
    <Layout>
      <BannerBoostPlay />
      <Benefits
        menus={[BEING_A_BOOSTPRENEUR.BENEFIT_A, BEING_A_BOOSTPRENEUR.BENEFIT_B, BEING_A_BOOSTPRENEUR.BENEFIT_C]}
      />
    </Layout>
  );
}
