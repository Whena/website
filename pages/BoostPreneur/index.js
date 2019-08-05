import React from 'react';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner/Banner.component';
import Benefits from '../../components/Benefits/Benefits.component';
import { Constants } from '../../constants';

export default function Index() {
  const { BEING_A_BOOSTPRENEUR, BOOSTPRENEUR_BANNER } = Constants;

  return (
    <Layout>
      <Banner
        contentPosition="flex-start"
        header={BOOSTPRENEUR_BANNER.HEADER}
        description={BOOSTPRENEUR_BANNER.DESCRIPTION}
      />
      <Benefits
        heading={BEING_A_BOOSTPRENEUR[0]}
        menus={[...BEING_A_BOOSTPRENEUR[1]]}
      />
    </Layout>
  );
}
