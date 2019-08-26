import React from 'react';
import getLodash from 'lodash/get';
import Layout from '../components/Layout';
import Banner from '../components/Banner/Banner.component';
import Faqs from '../components/FAQs/FAQs.component';
import Benefits from '../components/Benefits/Benefits.component';
import PersonaFeatures from '../components/Reusable/PersonaFeatures/PersonaFeatures.component';
import { getBoostPlay } from '../services/page';
import HowToSliderContainer from '../components/HowToSlider';

function BoostPlay({ data = {} }) {
  const banner = getLodash(data, 'fields.banner', {});
  const howto = getLodash(data, 'fields.how_to_activate', {});
  const benefits = getLodash(data, 'fields.benefits', {});
  const featured = getLodash(data, 'fields.featured', {});
  const faq_header = getLodash(data, 'fields.faq_header', []);
  const faqs = getLodash(data, 'fields.faqs', []);

  return (
    <Layout>
      <Banner
        header={banner.title}
        description={banner.description}
        backgroundImage={banner.image_banner}
        googlePlayUrl={banner.google_play_url}
        appStoreUrl={banner.app_store_url}
      />
      <Benefits
        heading={benefits.header}
        contents={benefits.banners}
      />
      {howto.header && (
        <HowToSliderContainer sliders={howto.banners} title={howto.header} />
      )}
      {featured.header && (
        <PersonaFeatures
          title={featured.header}
          description={featured.description}
          features={featured.banners}
        />
      )}
      <Faqs
        header={faq_header}
        questions={faqs}
      />
    </Layout>
  );
}

BoostPlay.getInitialProps = async ({ err, req, res, query, ...others }) => {
  try {
    const data = await getBoostPlay();
    return { data };
  } catch (error) {
    return { data: {}, error };
  }
};

export default BoostPlay;
