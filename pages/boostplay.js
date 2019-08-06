import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner/Banner.component';
import BannerBoostPlay from '../components/BannerBoostPlay/BannerBoostPlay.component';
import BoostPlayFAQs from '../components/BoostPlayFAQs/BoostPlayFAQs.component';
import Benefits from '../components/Benefits/Benefits.component';
import { Constants } from '../constants';
import {
  Grid,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function Index() {
  const { BOOSTPLAY_FOR_YOU } = Constants;

  return (
    <Layout>
      <BannerBoostPlay />
      {/* <Banner
      contentPosition="flex-start"
      header=""
      description=""
      > */}
        
      {/* </Banner> */}
      <Benefits
        heading={BOOSTPLAY_FOR_YOU[0]}
        menus={[...BOOSTPLAY_FOR_YOU[1]]}
      />
      <BoostPlayFAQs />
    </Layout>
  );
}
