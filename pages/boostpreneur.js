import React from 'react';
import getLodash from 'lodash/get';
import Layout from '../components/Layout';
import Banner from '../components/Banner/Banner.component';
import Benefits from '../components/Benefits/Benefits.component';
import BoostpreneurMiniInfo from '../components/BoostpreneurMiniInfo/BoostpreneurMiniInfo.component';
import HowToSlider from '../components/HowToSlider';
import Faqs from '../components/FAQs/FAQs.component';
import PersonaFeatures from '../components/Reusable/PersonaFeatures/PersonaFeatures.component';
import { Constants } from '../constants';
import { getBoostPreneur } from '../services/page';
import { resizeUrlButterImage } from '../utils/helpers';

const { BANNER_BUTTONS } = Constants;

export default function BoostPreneur({ data = {} }) {
  const banner = getLodash(data, 'fields.banner', []);
  const benefits = getLodash(data, 'fields.benefits', []);
  const boostpreneur_information = getLodash(
    data,
    'fields.boostpreneur_information',
    []
  );
  const how_to = getLodash(data, 'fields.how_to', []);
  const boostpreneur_quest = getLodash(data, 'fields.boostpreneur_quest', []);
  const faqs_header = getLodash(data, 'fields.faqs_header', '');
  const faqs = getLodash(data, 'fields.faqs', []);

  return (
    <Layout>
      <Banner
        header={banner.title}
        description={banner.description}
        backgroundImage={resizeUrlButterImage(banner.image_banner)}
        googlePlayUrl={BANNER_BUTTONS.GOOGLE_PLAY}
        appStoreUrl={BANNER_BUTTONS.APP_STORE}
      />
      <Benefits heading={benefits.header} contents={benefits.banners} />
      <BoostpreneurMiniInfo contents={boostpreneur_information.banners} />
      {how_to.header && (
        <HowToSlider sliders={how_to.banners} title={how_to.header} />
      )}
      {boostpreneur_quest.header && (
        <PersonaFeatures
          title={boostpreneur_quest.header}
          description={boostpreneur_quest.description}
          features={boostpreneur_quest.banners}
        />
      )}
      <Faqs header={faqs_header} questions={faqs} />
    </Layout>
  );
}

BoostPreneur.getInitialProps = async ({ err, res, req, query }, locale) => {
  try {
    const data = await getBoostPreneur({ locale });
    return { data };
  } catch (error) {
    return { data: {}, error };
  }
};
